import Link from 'next/link';

export default function Info() {
  return (
    <>
      <div className="px-6 py-12">
        <h1 className="text-4xl font-extrabold">
          <Link href="/">
            김민기
          </Link>
        </h1>
        <h2 className="mt-6 text-lg font-bold">
          Full Stack Web Developer
        </h2>
        <h3 className="mt-3 w-80 font-light">
          I build accessible, pixel-perfect digital experiences for the web.
        </h3>
      </div>
    </>
  );
}
