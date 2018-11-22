const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.[hash:8].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-output.[ext]'
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if (isDev) {
    config.module.rules.push({
        test: /\.styl/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            },
            'stylus-loader'
        ]
    })
    config.devServer = {
        open: true,
        hot: true,
        //historyApiFallback: true,
        overlay: true,
    }
    config.devtool = '#cheap-module-source-map'
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config