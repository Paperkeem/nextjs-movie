/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/movies",
  //       destination: `${API_URL}/movie/popular?api_key=${API_KEY}`,
  //     },
  //     {
  //       source: "/api/movies/:id",
  //       destination: `${API_URL}/movie/:id?api_key=${API_KEY}`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
