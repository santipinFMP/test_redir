import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        'http://localhost',
        'https://zeus:3000',
        'zeus:3000'
      ]
    }
  }
};

export default nextConfig;
