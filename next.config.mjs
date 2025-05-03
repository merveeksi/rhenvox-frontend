/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'ui.shadcn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    // We don't want to fail the build on ESLint errors
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            // Add preload for favicon with a mask to show rounded corners
            value: '</favicon-32x32.png>; rel=icon; as=image; type=image/png; sizes=32x32',
          },
        ],
      },
    ];
  },
};

export default nextConfig; 