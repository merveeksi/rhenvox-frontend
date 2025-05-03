import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ui.shadcn.com'], // Add any domains from which you'll load external images
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
    ]
  },
};

export default nextConfig;
