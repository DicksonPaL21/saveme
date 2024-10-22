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
    ],
  },
  experimental: {
    typedRoutes: true,
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
