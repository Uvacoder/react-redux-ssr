const path = require('path');
const merge = require('webpack-merge');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

const baseConfig = require('./webpack.base.js');

const config = {
  // Root file for the client app.
  entry: './src/client/client.js',

  // Location of the generated file.
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    chunkFilename: '[name].js',
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './public/react-loadable.json',
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendor",
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
};

module.exports = merge(baseConfig, config);
