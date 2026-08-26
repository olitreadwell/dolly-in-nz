import type { NextConfig } from 'next';
import { siteBasePath } from './src/config/site';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: siteBasePath,
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
