const path = require('path');

module.exports = {
    entry: {
        index: './index.js',
        another: './index-2nd.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};
