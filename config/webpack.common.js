const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
const OfflinePlugin = require('offline-plugin');
const DllLinkPlugin = require("dll-link-webpack-plugin");

const commonConfig = {
    entry: {
        app: './src/main.ts'
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.vue', 'json'],
        alias: {
            vue$: 'vue/dist/vue.js'
        }
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
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                exclude: helpers.root('node_modules'),
                loader: 'raw-loader!sass-loader'
            }
        ]
    },
    plugins: [

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
        new DllLinkPlugin({
            config: require('./webpack.dll.js'),
            appendVersion: true,
            assetsMode: true,
            htmlMode: true,
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
