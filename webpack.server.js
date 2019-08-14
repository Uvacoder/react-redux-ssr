const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building the bundle for node.
  target: 'node',

  // Root file for the server app.
  entry: './src/index.js',

  // Location of the generated file.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tells webpack not to bundle any libraries already inside node modules.
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
