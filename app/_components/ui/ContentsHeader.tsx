import { ReactNode } from 'react';

export default function ContentsHeader({ children}: { children: ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-40 mb-3 px-6 py-4 backdrop-blur-md">
        <h2 className="text-sm font-bold tracking-widest uppercase">
          { children }
        </h2>
      </div>
    </>
  );
}
