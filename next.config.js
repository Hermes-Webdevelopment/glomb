/** @type {import('next').NextConfig} */
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(withPurgeCss())

module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/blog/:path*",
          destination: `https://blog.glomb.com.br/:path*`,
        },
      ],
    }
  },
}

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
  
      return config
    },
  }
  
  module.exports = nextConfig

  // const withBundleAnalyzer = require('@next/bundle-analyzer')({
  //   enabled: process.env.ANALYZE === 'true',
  // })

  // module.exports = withBundleAnalyzer({})
  
