import Link from 'next/link';

export default function Info({ className }: { className?: string }) {
  return (
    <header className={`
      px-6 py-12
      lg:px-0 lg:pt-24
    `}
    >
      <h1 className={`
        text-4xl font-extrabold tracking-wide
        sm:text-5xl
      `}
      >
        <Link href="/">
          김민기
        </Link>
      </h1>
      <h2 className={`
        mt-6 text-xl font-bold
        sm:text-2xl
      `}
      >
        Full Stack Web Developer
      </h2>
      <h3 className="mt-3 w-80 font-light">
        I build accessible, pixel-perfect digital experiences for the web.
      </h3>
    </header>
  );
}
