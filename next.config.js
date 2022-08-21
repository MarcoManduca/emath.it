/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.oilproject.org'],
  },
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
};

module.exports = nextConfig;
