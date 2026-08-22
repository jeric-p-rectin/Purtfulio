import type { Metadata } from "next";
import "./globals.css";

import { Abril_Fatface, Lato } from 'next/font/google';
import { SITE_URL, SITE_NAME, TITLE, DESCRIPTION, KEYWORDS } from './seo';

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril',
  display: 'swap',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Jeric Rectin",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: KEYWORDS,
  // No openGraph/twitter/canonical here on purpose: each route sets its own
  // so `/` can advertise the icon and `/portfolio` the poster.
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Jeric Rectin",
        alternateName: "Jeric",
        url: SITE_URL,
        jobTitle: "Full-stack Web Developer",
        description: DESCRIPTION,
        email: "mailto:jerixmodz@gmail.com",
        nationality: { "@type": "Country", name: "Philippines" },
        address: {
          "@type": "PostalAddress",
          addressCountry: "PH",
        },
        knowsAbout: [
          "Web Development",
          "Full-stack Development",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Three.js",
          "Mobile App Development",
        ],
        sameAs: [
          "https://www.linkedin.com/in/jeric-p-rectin",
          "https://github.com/jeric-p-rectin",
          "https://www.facebook.com/share/1CUN9Puxnq/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: "Jeric Rectin — Full-stack Developer",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html className="white-scrollbar" lang="en">
      <head>
        {/*
          Marks the document as JS-capable before first paint. The scroll
          reveal styles are scoped to .js so that with JavaScript disabled
          the content renders visible instead of stuck at opacity 0.
        */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className={`white-scrollbar ${abrilFatface.variable} ${lato.variable}`}>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
