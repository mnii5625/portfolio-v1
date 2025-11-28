'use client';

import { CSSProperties, useEffect, useEffectEvent, useState } from 'react';
import { useTheme } from 'next-themes';
import { Skill, SkillMeta } from '@/app/_components/contents/experience/skills.type';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function SkillIcon({ skill, size = 24, className }: { skill: Skill, size?: number, className?: string }) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

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
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`
            relative flex size-[var(--skill-size)] items-center justify-center rounded-md bg-accent
            ${className}
          `}
          style={{ '--skill-size': `${size}px` } as CSSProperties}
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
        </div>
      </TooltipTrigger>
      <TooltipContent>{ SkillMeta[skill]['name'] }</TooltipContent>
    </Tooltip>
  );
}
