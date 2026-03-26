/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React 18 features and automatic JSX runtime
  reactStrictMode: true,
  swcMinify: true,
  // Removed experimental optimizeCss as it causes build issues on Vercel
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/logo.png',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
