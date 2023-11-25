/** @type {import('next').NextConfig} */
const path = require('path')
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: false,
  swcMinify: false,
  env: {
    BASE_URL: 'http://185.182.219.249:8080/api'
  },
  images: {
    domains: ['194.4.56.53', '185.182.219.249'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '185.182.219.249',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig
