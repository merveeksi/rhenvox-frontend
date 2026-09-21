import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
