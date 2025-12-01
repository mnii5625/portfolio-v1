'use client';

import { useState, useEffect, useRef } from 'react';

function isOverActualText(x: number, y: number) {
  let textNode = null;

  // Firefox
  if (document.caretPositionFromPoint) {
    const position = document.caretPositionFromPoint(x, y);
    if (!position || position.offsetNode.nodeType !== Node.TEXT_NODE) {
      return false;
    }
    textNode = position.offsetNode;
  }
  // Chrome, Safari
  else if (document.caretRangeFromPoint) {
    const range = document.caretRangeFromPoint(x, y);
    if (!range || range.startContainer.nodeType !== Node.TEXT_NODE) {
      return false;
    }
    textNode = range.startContainer;
  }
  else {
    return false;
  }

  // 실제 텍스트 영역 체크
  const tempRange = document.createRange();
  tempRange.selectNodeContents(textNode);
  const rects = tempRange.getClientRects();

  for (const rect of rects) {
    if (x >= rect.left && x <= rect.right
      && y >= rect.top && y <= rect.bottom) {
      return true;
    }
  }

  return false;
}

interface Position {
  x: number
  y: number
}

function CursorCore() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState<Position>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOverText, setIsOverText] = useState<boolean>(false);
  const [isOverPointer, setIsOverPointer] = useState<boolean>(false);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
      setIsVisible(true);

      // 마우스 아래 요소 확인
      const element = document.elementFromPoint(e.clientX, e.clientY);

      if (element) {
        const tagName = element.tagName.toLowerCase();

        setIsOverText(isOverActualText(x, y));

        // pointer 영역인지 확인 (버튼, 링크 등)
        const pointerTags = ['button', 'a', 'label'];
        setIsOverPointer(pointerTags.includes(tagName));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCirclePosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        return {
          x: prev.x + dx * 0.7,
          y: prev.y + dy * 0.7
        };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">

      <div
        className={`
          absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary
          transition-opacity duration-300
          ${isVisible && isOverPointer ? 'opacity-80' : 'opacity-0'}
        `}
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`
        }}
      />

      <div
        className={`
          absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary
          transition-[width,height,opacity] duration-300
          ${isVisible ? 'opacity-80' : 'opacity-0'}
          ${isOverText && !isOverPointer ? 'h-6 w-1' : 'h-3 w-3'}
        `}
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`
        }}
      />
    </div>
  );
}

export default function Cursor() {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    }
  }, []);

  if (typeof window !== 'undefined' && isTouchDevice) {
    return <></>;
  }

  return (
    <CursorCore />
  );
}
