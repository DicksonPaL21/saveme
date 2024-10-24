import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.buymeacoffee.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/tools/youtube-video-downloader',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
