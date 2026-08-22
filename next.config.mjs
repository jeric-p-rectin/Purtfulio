/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  experimental: {
    optimizePackageImports: ['animejs', '@react-three/drei'],
  },

  async redirects() {
    return [
      // /portfolio used to serve the exact same page as / — collapse it
      // into a single canonical URL instead of splitting crawl budget.
      {
        source: '/portfolio',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
