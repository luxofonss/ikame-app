/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.169.68.101",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
