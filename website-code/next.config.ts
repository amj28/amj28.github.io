import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export
  trailingSlash: true, // Optional: if you want to add trailing slashes to URLs
};

export default nextConfig;
