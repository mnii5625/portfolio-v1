import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import Cursor from '@/app/_components/ui/Cursor';
import ParticleClient from '@/app/_components/ui/ParticleClient';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  preload: true,
  display: 'block',
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.mingi.kr'),
  title: 'Mingi\'s Portfolio',
  description: '코드 한 줄부터 배포 파이프라인까지, 세심하게 설계하며 견고한 서비스를 만드는 풀스택 웹 개발자입니다.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`
          ${pretendard.variable}
          font-sans antialiased
        `}
      >

        <ThemeProvider defaultTheme="dark">
          <ParticleClient />
          <Cursor />
          { children }
        </ThemeProvider>
      </body>
    </html>
  );
}
