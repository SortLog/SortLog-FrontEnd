/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: './',
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
