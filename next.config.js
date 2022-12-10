/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
    domains: ['https://www.beneficiosysalud.com']
  },
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL
  }
}

module.exports = nextConfig
