/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React 18 features and automatic JSX runtime
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
