/** @type {import('next').NextConfig} */

const isProd = process.env.TARGET_ENV === 'production'

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: isProd ? '' : '/my-site-v2',
  env: {
    TARGET_ENV: process.env.TARGET_ENV,
  },
}

module.exports = nextConfig
