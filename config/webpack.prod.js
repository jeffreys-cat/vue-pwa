const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/vue-pwa/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                url: JSON.stringify("http://www.api.com/"),
                environment: JSON.stringify('prod')
            }
        }),
        new BaseHrefWebpackPlugin({ baseHref: '/vue-pwa/' })
    ]
});
