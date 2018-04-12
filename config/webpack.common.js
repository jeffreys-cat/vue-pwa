const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
const path = require('path');
const fs = require('fs');
const OfflinePlugin = require('offline-plugin');

const extractSass = new ExtractTextPlugin('[name].[hash].css');
const extractCss = new ExtractTextPlugin('[name].[hash].css');

const commonConfig = {
    entry: {
        app: './src/main.ts'
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.vue', 'json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                exclude: [helpers.root('node_modules'), helpers.root('src', 'main.ts')],
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: helpers.root('node_modules'),
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
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
            // src/scss合并到js中
            {
                test: /\.(scss|sass)$/,
                exclude: helpers.root('node_modules'),
                loader: 'raw-loader!sass-loader'
            }
        ]
    },
    plugins: [
        // array id
        new webpack.optimize.OccurrenceOrderPlugin(),

        new CopyWebpackPlugin([{
            from: './static/**',
            to: './'
        }]),

        // auto inject
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // for PWA
        new OfflinePlugin({
            publicPath: '/vue-pwa/',
            safeToUseOptionalCaches: true,
            externals: [
                '/'
            ],
            caches: 'all',
            AppCache: false,
            ServiceWorker: {
                events: true,
                navigateFallbackURL: '/',
                minify: false
            }
        })
    ]
}

module.exports = commonConfig;
