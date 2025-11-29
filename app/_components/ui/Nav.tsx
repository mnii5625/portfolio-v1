'use client';

import ScrollSpy from 'react-scrollspy-navigation';
import { sections } from '@/app/portfolio.data';

export default function Nav() {
  return (
    <ScrollSpy
      activeClass="text-primary [&>span]:w-16 [&>span]:bg-primary"
    >
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
                  className="inline-flex items-center text-muted-foreground transition-all"
                >
                  <span className="mr-4 inline-block h-px w-8 bg-muted-foreground transition-all"></span>
                  { section.title }
                </a>
              </li>
            ))
          }

        </ul>
      </nav>
    </ScrollSpy>
  );
}
