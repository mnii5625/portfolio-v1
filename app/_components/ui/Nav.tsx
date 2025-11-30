'use client';

import { sections } from '@/app/portfolio.data';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`
      hidden
      lg:block
    `}
    >
      <ul className="flex flex-col gap-4 text-sm tracking-wide uppercase">
        {
          sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
                  group/nav inline-flex items-center transition-all
                  ${activeId === section.id
              ? `
                text-primary
                [&>span]:w-16 [&>span]:bg-primary
              `
              : `
                text-muted-foreground
                hover:text-primary
              `}
                `}
              >
                <span className={`
                  mr-4 inline-block h-px w-8 bg-muted-foreground transition-all
                  group-hover/nav:w-16 group-hover/nav:bg-primary
                `}
                >
                </span>
                { section.title }
              </a>
            </li>
          ))
        }

      </ul>
    </nav>
  );
}
