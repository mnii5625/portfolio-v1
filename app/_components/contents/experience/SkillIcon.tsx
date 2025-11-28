'use client';

import { CSSProperties, useEffect, useEffectEvent, useState } from 'react';
import { useTheme } from 'next-themes';
import { Skill, SkillMeta } from '@/app/_components/contents/experience/skills.type';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkillIcon({ skill, size = 24}: { skill: Skill, size?: number }) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  // 안전하게 최신 setMounted 호출 이벤트 만들기
  const markMounted = useEffectEvent(() => {
    setMounted(true);
  });

  // 마운트 시점에서 이벤트 호출
  useEffect(() => {
    markMounted();
  }, []);

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  const Icon = SkillMeta[skill][theme];

  return (
    <>
      <div
        className={`
          relative size-[var(--skill-size)] items-center justify-center rounded-md bg-accent
        `}
        style={{ '--skill-size': `${size}px` } as CSSProperties}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {
          !mounted
            ? <Skeleton className="absolute inset-0 h-full w-full" />
            : (
              <div className="h-full w-full animate-fade-in items-center justify-center opacity-0">
                <Icon width={size} height={size} />
              </div>
            )
        }
        { showTooltip && <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent">{ SkillMeta[skill]['name'] }</div> }
      </div>
    </>
  );
}
