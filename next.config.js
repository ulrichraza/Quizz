/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/quizz',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.footballdatabase.eu',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'footballdatabase.eu',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'skiillz.nodeapp.internal',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.footballdatabase.eu',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
        port: '',
      },
      {
        protocol: 'http',
        hostname: "localhost",
        port: '3000',
      }
    ],
  },
};

module.exports = nextConfig;
