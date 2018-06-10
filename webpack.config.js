const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const PACKAGE = require('./package.json');
const VERSION = PACKAGE.version;

function isProd() {
    return process.env.NODE_ENV === 'production';
}

module.exports = {
    entry: {
        'content-script': './src/content/index.js',
        'popup': './src/popup/index.js',
        'background': './src/background/index.js',
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
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            './src/manifest.json',
            {
                from: './src/popup/index.html',
                to: 'popup.html',
            },
            {
                from: './src/assets',
                to: 'assets',
            }
        ]),
        new CleanWebpackPlugin(
            [ 
                isProd() ? 'dist' : 'dev',
                'release',
            ],
        ),
        new ZipPlugin({
            path: path.resolve(__dirname, 'release'),
            filename: `fvsc_${VERSION}.zip`,
        }),
    ],
};
