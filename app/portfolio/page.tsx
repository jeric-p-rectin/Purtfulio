import type { Metadata } from "next";
import MainComponent from "../components/main-component";
import { SITE_URL, SITE_NAME, TITLE, DESCRIPTION } from "../seo";

/**
 * The POSTER route — this is the one to send as a link (Messenger etc).
 *
 * Same page as `/`; the only difference is the Open Graph image, which is
 * the whole reason this route exists. poster.jpg is 1200x630 so it renders
 * as a large preview card.
 *
 * `openGraph.url` MUST point at /portfolio. Facebook treats og:url as the
 * canonical identity of a share, so pointing it at "/" (as the original did)
 * lets Facebook fall back to the root page and show the icon instead of the
 * poster — defeating the point of having this route.
 *
 * Deliberately NOT canonical-tagged to "/": that risks the same fallback.
 * `noindex` is what keeps this duplicate out of Google, and it does not
 * affect Facebook — its scraper reads Open Graph tags and ignores noindex.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/portfolio`,
    title: TITLE,
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["/poster.jpg"],
  },
};

export default function Portfolio() {
  return <MainComponent />;
}
