const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const ZipPlugin = require('zip-webpack-plugin');

function isProd() {
  return process.env.NODE_ENV === 'production';
}

module.exports = {
  entry: {
    'content-script': './src/content/index.js',
    popup: './src/popup/index.js',
    background: './src/background/index.js',
  },
  output: {
    path: path.resolve(__dirname, isProd() ? 'dist' : 'dev'),
    filename: '[name].js',
  },
  mode: isProd() ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|dev|dist)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        './src/manifest.json',
        {
          from: './src/popup/index.html',
          to: 'popup.html',
        },
        {
          from: './src/assets',
          to: 'assets',
        },
      ],
    }),
    new CleanPlugin({
      cleanOnceBforeBuildPatterns: ['*.zip'],
    }),
    new ZipPlugin({
      path: path.resolve(__dirname, 'release'),
      filename: `fvsc${isProd() ? '' : '-dev'}.zip`,
    }),
  ],
};
