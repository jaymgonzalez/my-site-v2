/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'prod'

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: isProd ? '' : '/my-site-v2',
}

module.exports = nextConfig
