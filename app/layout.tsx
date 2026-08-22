import type { Metadata } from "next";
import "./globals.css";

import { Abril_Fatface, Lato } from 'next/font/google';

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

const SITE_URL = "https://jericrectin.dev";
const SITE_NAME = "Jeric Rectin";
const DESCRIPTION =
  "Jeric Rectin is a full-stack developer from the Philippines who brings ideas to life with powerful digital solutions. From sleek portfolios to business platforms, he builds websites that are fast, scalable, and designed to drive growth.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jeric Rectin — Full-stack Developer",
    template: "%s | Jeric Rectin",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Jeric Rectin",
    "Jeric Piamonte Rectin",
    "full-stack developer",
    "web developer Philippines",
    "Filipino developer",
    "Next.js developer",
    "React developer",
    "portfolio",
    "mobile app developer",
    "Tailwind CSS",
    "Three.js",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Jeric Rectin — Full-stack Developer",
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_PH",
    images: [
      {
        url: "/poster.jpg",
        width: 1200,
        height: 630,
        alt: "Jeric Rectin — Full-stack Developer portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeric Rectin — Full-stack Developer",
    description: DESCRIPTION,
    images: ["/poster.jpg"],
  },
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
