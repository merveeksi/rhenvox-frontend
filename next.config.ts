import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/en/work",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
