import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Enables static export
  trailingSlash: true, // Optional: adds trailing slashes to URLs (useful for GitHub Pages)
};

export default nextConfig;
