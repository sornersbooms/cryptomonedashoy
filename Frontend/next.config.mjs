/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.criptonoticias.com',
      },
      {
        protocol: 'https',
        hostname: '**.cointelegraph.com',
      },
    ],
  },
};

export default nextConfig;
