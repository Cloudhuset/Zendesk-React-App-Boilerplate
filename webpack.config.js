
/* global __dirname */

var path = require('path');
var webpack = require('webpack');
ExtractTextPlugin = require('extract-text-webpack-plugin');
var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'app/assets');

const environment = process.env.env
const isProductionBuild = process.env.env === 'prod'

var plugins = [
    new ExtractTextPlugin('app.css', {
        allChunks: true
    }),
]

if(isProductionBuild) {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }))
    plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
    entry: ['babel-polyfill', path.resolve(dir_js, 'app.js')],
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                query: {
                    plugins: ['transform-decorators-legacy', 'transform-object-rest-spread', 'transform-runtime'],
                    presets: ['env', 'es2015', 'react','stage-0', 'stage-2']
                },
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
        ]
    },
    plugins: plugins,
    stats: {
        colors: true
    },
    devtool: isProductionBuild ? undefined : 'source-map',
};
