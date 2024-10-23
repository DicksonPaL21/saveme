/** @type {import('next').NextConfig} */
const nextConfig = {
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
  experimental: {
    typedRoutes: true,
    missingSuspenseWithCSRBailout: false,
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
