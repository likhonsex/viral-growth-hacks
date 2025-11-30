import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|js|css|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
