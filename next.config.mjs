/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "static.wixstatic.com", "images.unsplash.com", "img.freepik.com"],
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://skbb.net-trix.ca/:path*',
      },
    ]
  }
};

export default nextConfig;
