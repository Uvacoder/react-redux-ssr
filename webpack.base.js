const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Ask webpack to run babel on every JS file
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        options: {
          presets: [
            'react', 
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader',
          ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
  ]
};
