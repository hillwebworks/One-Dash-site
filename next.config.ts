import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopack is enabled by default in Next.js 16
  // Videos in the public folder are served statically and don't need special configuration
  turbopack: {},
  images: {
    qualities: [75, 90],
    remotePatterns: [],
  },
};

export default nextConfig;
