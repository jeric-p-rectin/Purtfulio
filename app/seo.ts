/**
 * Shared SEO values used by the root layout and both page routes.
 *
 * `/` and `/portfolio` render the exact same site. They exist as two URLs
 * on purpose, because a social platform reads only ONE Open Graph image
 * per URL — two URLs is the only way to offer two different previews:
 *
 *   /           -> logo.png   (300x300)   small square card, for posting
 *   /portfolio  -> poster.jpg (1200x630)  large card, for sharing
 */

export const SITE_URL = "https://jericrectin.dev";

export const SITE_NAME = "Jeric Rectin";

export const TITLE = "Jeric Rectin — Full-stack Developer";

export const DESCRIPTION =
  "Jeric Rectin is a full-stack developer from the Philippines who brings ideas to life with powerful digital solutions. From sleek portfolios to business platforms, he builds websites that are fast, scalable, and designed to drive growth.";

export const KEYWORDS = [
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
];
