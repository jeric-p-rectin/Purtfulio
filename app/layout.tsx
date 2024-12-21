import type { Metadata } from "next";
import "./globals.css";

import { Abril_Fatface, Lato } from 'next/font/google';

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Jeric's Portfolio",
  description: "A Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/mylogo.png" type="image/png" sizes="32x32" />
      <meta property="og:image" content="/mylogo.png" />
      <body className={`${abrilFatface.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
