import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import Cursor from '@/app/_components/ui/Cursor';
import ParticleClient from '@/app/_components/ui/ParticleClient';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
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
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >

        <ThemeProvider enableSystem={true} defaultTheme="system">
          <ParticleClient />
          <Cursor />
          { children }
        </ThemeProvider>
      </body>
    </html>
  );
}
