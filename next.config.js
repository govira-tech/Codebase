/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If using Next.js 16+, 'appDir' is enabled automatically in the /app folder
  experimental: {
    turbo: true, // optional: enable Turbopack
  },
};

module.exports = nextConfig;
