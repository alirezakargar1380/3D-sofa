import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/lab',
      '@mui/x-data-grid',
      '@mui/x-date-pickers',
      '@iconify/react',
      'date-fns',
      'lodash',
    ],
  },
};

export default nextConfig;
