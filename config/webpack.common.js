const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');
const path = require('path');
const fs = require('fs');
var OfflinePlugin = require('offline-plugin');

// const ENV = process.env.NODE_ENV ? process.env.ENV : 'production';

const extractSass = new ExtractTextPlugin('[name].[hash].css');
const extractCss = new ExtractTextPlugin('[name].[hash].css');

const commonConfig = {
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
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true
        },
    },
    module: {
        rules: [{
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
            },
            {
                from: './static/img/icons/**',
                to: './'
            }
        ]),

        // auto inject
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
            // serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
            //     './service-worker.js'), 'utf-8')}</script>`
        }),
        // for PWA
        new OfflinePlugin({
            publicPath: '/',
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
