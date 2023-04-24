const withCSS = require('@zeit/next-css')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = withCSS({
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[name].[id].css'
        })
      )
    }

    return config
  }
})
