/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React 18 features and automatic JSX runtime
  reactStrictMode: true,
  swcMinify: true,
  // Removed experimental optimizeCss as it causes build issues on Vercel
}

module.exports = nextConfig
