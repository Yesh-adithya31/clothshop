/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/codemap/:path*',
            destination: 'http://18.136.12.149:8080/codemap/:path*',
          },
          {
            source: '/product/:path*',
            destination: 'http://18.136.12.149:8080/product/:path*',
          },
        ];
      },
}

module.exports = nextConfig
