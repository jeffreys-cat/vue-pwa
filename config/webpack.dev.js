const webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

// if (process.env.NODE_ENV === 'bundle-report') {
//     commonConfig.plugins.push(     // bundle analysis
//         new BundleAnalyzerPlugin({
//             analyzerMode: 'server',
//             analyzerHost: '127.0.0.1',
//             analyzerPort: 8888,
//             reportFilename: 'report.html',
//             defaultSizes: 'parsed',
//             openAnalyzer: true,
//             generateStatsFile: false,
//             statsFilename: 'stats.json',
//             statsOptions: null,
//             logLevel: 'info'
//         })
//     )
// }


module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
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
        minimize: false
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                url: JSON.stringify('http://www.apitest.com/'),
                environment: JSON.stringify('dev')
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        compress: true,
        hot: true,
        contentBase: helpers.root('dist')
    }
});
