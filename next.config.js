
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
reactStrictMode: true,

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.forEach((rule) => {
      if (rule.test && typeof rule.test.toString === 'function' && rule.test.toString().includes('.css')) {
        rule.use.push({
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
              // ...
            },
          },
        });
      }
    });

    config.plugins.push(new MiniCssExtractPlugin({
      filename: isServer ? '[name].server.css' : '[name].css',
      chunkFilename: isServer ? '[name].[contenthash].server.css' : '[name].[contenthash].css',
    }));

    return config;
  },
};
