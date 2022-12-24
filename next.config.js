/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  swcMinify: true,

  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
