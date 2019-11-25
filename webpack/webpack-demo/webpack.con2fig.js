const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//__dirname 总是指向被执行 js 文件的绝对路径
//path.resolve([...paths])
console.log(process.env.ELECTRON)
global.DEV_API = 'haomingwang'
module.exports ={
    // entry: './src/index.js',
    entry:{
        app: './src/index.js',
        // print: './src/print.js'
    },
    output:{
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    // devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    },
    optimization: {
        minimize: true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: process.env.ELECTRON
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' // 指定公共 bundle 的名称。
        // })
    ],
    module:{
        rules: [
            {
                // $ 匹配字符串结尾
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // $ 匹配字符串结尾
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100
                        }
                    }
                ]
            },
            {
                // $ 匹配字符串结尾
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            },
        ]
    }
}