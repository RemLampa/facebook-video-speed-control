const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dev'),
    },
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
