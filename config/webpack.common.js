const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const helpers = require('./helpers');
const path = require('path');

const extractSass = new ExtractTextPlugin('[name].[hash].css');
const extractCss = new ExtractTextPlugin('[name].[hash].css');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    resolve: {
        extensions: ['.js', '.vue', 'json'],
        alias: {
            'assets': helpers.root('src', 'assets'),
            'vue$': 'vue/dist/vue.esm.js',
            '@': helpers.root('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [helpers.root('src'), helpers.root('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: helpers.root('src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            // vendor
            {
                test: /\.css$/,
                exclude: [helpers.root('src')],
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            // src/**/*.css
            {
                test: /\.css$/,
                include: [helpers.root('src/assets')],
                loaders: ['style-loader', 'css-loader']
            },
            // src/scss单独打包
            // {
            //     test: /\.scss$/,
            //     exclude: [helpers.root('node_modules')],
            //     use: extractSass.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            // },
            // src/scss合并到js中
            {
                test: /\.(scss|sass)$/,
                exclude: helpers.root('node_modules'),
                loader: 'raw-loader!sass-loader'
            }
        ]
    },
    plugins: [

        // Common chunks
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor']
        }),

        // array id
        new webpack.optimize.OccurrenceOrderPlugin(),

        // auto inject
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),

        // bundle analysis
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

    ]
}
