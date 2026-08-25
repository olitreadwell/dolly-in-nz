import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/the-wind-keeps-her-songs',
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
