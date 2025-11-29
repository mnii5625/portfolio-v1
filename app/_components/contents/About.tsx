import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import { ReactNode } from 'react';
import { about } from '@/app/portfolio.data';
import Markdown from '@/app/_components/ui/Markdown';

export default function About() {
  return (
    <>
      <section id="about">
        <ContentsHeader>About</ContentsHeader>
        <div className="space-y-4 px-6 text-base/6 break-keep text-muted-foreground">
          {
            about.content.map((content, index) => (
              <Markdown key={index}>{ content }</Markdown>
            ))
          }
        </div>
      </section>
    </>
  );
}
