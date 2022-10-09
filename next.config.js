/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
