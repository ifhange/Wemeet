let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin()
    ]
}
