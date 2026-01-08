import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8081",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mocha-cdn.com",
      },
      {
        protocol: "https",
        hostname: "sunny-props-backend.toystack.dev",
      },
    ],
  },
};

export default nextConfig;
