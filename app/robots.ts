import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://jericrectin.dev/sitemap.xml',
    host: 'https://jericrectin.dev',
  };
}
