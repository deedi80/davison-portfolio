// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your config options go here.
  // Example:
  // reactStrictMode: true, 
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. You should only use this if you are
    // confident that you are running lint checks elsewhere.
    ignoreDuringBuilds: true,
  },
  // ... other config options ...
};

module.exports = nextConfig;