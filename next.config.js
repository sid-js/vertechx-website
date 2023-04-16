/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['ik.imagekit.io'],
  },
  experimental: {
    swcPlugins: [['next-superjson-plugin', {}]],
  },
};

module.exports = nextConfig;
