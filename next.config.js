/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['https://www.beneficiosysalud.com'],
  },
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination:
          'https://bys-api.ao25qg3fhikk4.us-east-1.cs.amazonlightsail.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
