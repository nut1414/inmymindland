/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.fbcdn.net',
        },
        {
          protocol: 'https',
          hostname: '**.fbsbx.com',
        },
      ],
    }
  },
  images: {
    domains:['lh3.googleusercontent.com','platform-lookaside.fbsbx.com'],
    
  },
  
}

module.exports = nextConfig
