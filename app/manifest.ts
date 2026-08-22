import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jeric Rectin — Full-stack Developer',
    short_name: 'Jeric Rectin',
    description:
      'Portfolio of Jeric Rectin, a full-stack developer from the Philippines building fast, scalable websites and mobile apps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A1A1A',
    theme_color: '#1A1A1A',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
