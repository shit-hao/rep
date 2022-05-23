const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry:{
        pageA:'./src/pageA.js',
        pageB:'./src/pageB.js',
        pageC:'./src/pageC.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[chunkhash].js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            chunks: "all",
            minSize: 0
            // cacheGroups: {
            //     commons: {
            //         chunks: "all",
            //         minChunks: 2,
            //         maxInitialRequests: 5, // The default limit is too small to showcase the effect
            //         minSize: 0 // This is example is too small to create commons chunks
            //     }
            // }
        }
    },
}
