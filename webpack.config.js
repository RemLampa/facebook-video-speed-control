const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
    entry: {
        'content-script': './src/content/index.js',
        'popup': './src/popup/index.js',
    },
    output: {
        path: path.resolve(__dirname, env === 'production' ? 'dist' : 'dev'),
        filename: '[name].js',
    },
    mode: env === 'production' ? env : 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dev|dist)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            './src/manifest.json',
            {
                from: './src/popup/index.html',
                to: 'popup.html',
            },
        ]),
        new CleanWebpackPlugin(
            [env === 'production' ? 'dist' : 'dev'],
        ),
    ],
};
