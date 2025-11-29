import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import { about } from '@/app/portfolio.data';

const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className="font-bold text-foreground">
      { children }
    </span>
  );
};

export default function About() {
  return (
    <>
      <section id="about">
        <ContentsHeader>About</ContentsHeader>
        <div className="space-y-4 px-6 text-base/6 break-keep text-muted-foreground">
          {
            about.content.map((content, index) => (
              <ReactMarkdown
                key={index}
                components={{
                  strong: ({ children }) => (
                    <Highlight>{ children }</Highlight>
                  )
                }}
              >
                { content }
              </ReactMarkdown>
            ))
          }
        </div>

      </section>
    </>
  );
}
