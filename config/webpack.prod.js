const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'common'
                }
            }
        },
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                url: JSON.stringify("http://www.api.com/"),
                environment: JSON.stringify('prod')
            }
        }),
        new BaseHrefWebpackPlugin({ baseHref: '/vue-pwa/' })
    ]
});
