import Link from 'next/link';

export default function Info() {
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
      <h3 className="mt-3 w-90 font-light text-balance break-keep">
        코드 한 줄부터 배포 파이프라인까지, 세심하게 설계하며 견고한 서비스를 만드는 풀스택 웹 개발자입니다.
      </h3>
    </header>
  );
}
