/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**', // Allow all paths from Unsplash
        },
      ],
    },
  };
  
  export default nextConfig;
  