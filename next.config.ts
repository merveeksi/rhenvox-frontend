import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker için ekliyoruz
  output: 'standalone', 

  images: {
    domains: ['ui.shadcn.com', 'images.unsplash.com'], // Her iki dosyadan gelen domainleri birleştir
    remotePatterns: [ // mjs dosyasından alındı
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },

  eslint: { // mjs dosyasından alındı
    ignoreDuringBuilds: true, // Eğer ESLint hatalarının build'i durdurmasını istemiyorsanız
  },

  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;