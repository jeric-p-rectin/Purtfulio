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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jeric",
    "url": "https://jericrectin.com",
    "sameAs": [
      "https://www.facebook.com/share/18tKmPifzv/",
      "https://twitter.com/yourprofile",
      "https://www.linkedin.com/in/jeric-p-rectin",
      "https://github.com/jeric-p-rectin",
      "https://www.instagram.com/yourprofile"
    ],
    "jobTitle": "Full-stack Web Developer",
    "description": "Jeric is a full-stack developer who brings ideas to life with powerful digital solutions. From sleek portfolios to business platforms, he builds websites that are fast, scalable, and designed to drive growth."
  };

  return (
    <html className="white-scrollbar" lang="en">
      <head>
        {/* Facebook App ID (replace YOUR_FB_APP_ID) */}
        <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
        {/* JSON-LD structured data for social profiles */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`white-scrollbar ${abrilFatface.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
