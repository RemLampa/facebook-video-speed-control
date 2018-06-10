const path = require('path');

const env = process.env.NODE_ENV;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, env === 'production' ? 'dist' : 'dev'),
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
};
