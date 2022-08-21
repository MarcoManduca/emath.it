/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['oilproject.org'],
  },
};

module.exports = nextConfig;
