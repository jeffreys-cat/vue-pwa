const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

if (process.env.NODE_ENV === 'bundle-report') {
    commonConfig.plugins.push(     // bundle analysis
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    )
}

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: helpers.root('dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
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
        new CopyPlugin([
            { from: 'vue-pwa.nginx.conf', to: 'config/' },
        ]),
        new BaseHrefWebpackPlugin({ baseHref: '/vue-pwa/' })
    ]
});
