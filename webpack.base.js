const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV || 'development';

module.exports = {
  // Ask webpack to run babel on every JS file
  mode: env,
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        // options: {
        //   babelrc: false,
        //   presets: [
        //     'react', 
        //     'stage-0',
        //     ['env', { targets: { browsers: ['last 2 versions'] } }],
        //   ],
        //   plugins: [
        //     '@babel/plugin-syntax-dynamic-import',
        //     'react-loadable/babel'
        //   ]
        // }
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
