const webpack = require('webpack');
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/components'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        publicPath: '/',
        filename: 'app.bundle.js'
    },
    entry: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
      path.resolve(__dirname, 'src/App')
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [{"loader":"file-loader","options":{"name":"assets/img/[name].[ext]"}},{"loader":"image-webpack-loader","options":{"mozjpeg":{"quality":65},"pngquant":{"quality":"10-20","speed":4},"svgo":{"plugins":[{"removeViewBox":false},{"removeEmptyAttrs":false}]},"gifsicle":{"optimizationLevel":7,"interlaced":false},"optipng":{"optimizationLevel":7,"interlaced":false}}}]
        },
        {
          test: /\.scss$/,
          loader: "webpack-sass"
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
};
