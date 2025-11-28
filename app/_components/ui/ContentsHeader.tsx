import { ReactNode } from 'react';

export default function ContentsHeader({ children}: { children: ReactNode }) {
  return (
    <>
      <div className="sticky mb-3 px-6 py-4">
        <h2 className="text-sm font-bold tracking-widest uppercase">
          { children }
        </h2>
      </div>
    </>
  );
}
