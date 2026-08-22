import type { Metadata } from "next";
import MainComponent from "./components/main-component";
import { SITE_URL, SITE_NAME, TITLE, DESCRIPTION } from "./seo";

/**
 * The ICON route — this is the one to post on Facebook.
 *
 * logo.png is 300x300, which is under Facebook's 600px threshold for a
 * large card, so it renders as the small square icon preview. The sibling
 * route /portfolio serves the 1200x630 poster for link shares instead.
 *
 * Next.js REPLACES `openGraph`/`twitter` rather than merging them with the
 * layout's, so both blocks are spelled out in full here.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_PH",
    images: [
      {
        url: "/logo.png",
        width: 300,
        height: 300,
        alt: "Jeric Rectin logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function Home() {
  return <MainComponent />;
}
