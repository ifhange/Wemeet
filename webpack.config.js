let path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "/app/main.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components|vendor)/,
            loader: 'babel?presets[]=es2015&cacheDirectory=true!preprocess?PROJECT=' + project
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({

        })
    ]
};
