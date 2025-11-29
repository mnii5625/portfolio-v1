import ReactMarkdown from 'react-markdown';
import { ReactNode } from 'react';

const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className="font-bold text-foreground">
      { children }
    </span>
  );
};

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        strong: ({ children }) => (
          <Highlight>{ children }</Highlight>
        )
      }}
    >
      { children }
    </ReactMarkdown>
  );
}
