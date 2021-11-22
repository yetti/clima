const WindiCSSWebpackPlugin = await import('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  images: {
    domains: ['openweathermap.org'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
