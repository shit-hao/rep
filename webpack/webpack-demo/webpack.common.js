//一些公共的webpack配置
//通常包括一些入口出口,clean-webpack-plugin,html-webpack-plugin(和一个常用的loader?)
 const path = require('path');
 const webpack = require('webpack');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    entry:{
        app: './src/index.js',
        // print: './src/print.js'
    },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin(),
     new webpack.HashedModuleIdsPlugin(),
   ],
   output: {
     //https://www.cnblogs.com/heyushuo/p/8543889.html
     filename: '[name].[chunkhash].bundle.js', //此选项决定了entry入口文件输出 bundle 的名称
     chunkFilename: '[name].[chunkhash].bundle.js', //此选项决定了非入口(non-entry) chunk 文件的名称。注意，这些文件名需要在 runtime 根据 chunk 发送的请求去生成。比如异步加载的chunk会使用该命名规则
     //需要在 webpack runtime 输出 bundle 值时，将 chunk id 的值对应映射到占位符(如 [name] 和 [chunkhash])。这会增加文件大小，并且在任何 chunk 的占位符值修改后，都会使 bundle 失效。
     //默认使用 [id].js 或从 output.filename 中推断出的值（[name] 会被预先替换为 [id] 或 [id].）。
     path: path.resolve(__dirname, 'dist')
   },
   module:{
     rules:[
        {
          test:/\.js$/,   //匹配JS文件  
          use:'babel-loader',
          exclude:/node_modules/   //排除node_modules目录
        },
        {
          test:/\.css$/,   //匹配JS文件  
          use:[
            'style-loader',
            'css-loader'
          ],
        },
        {
          test:/\.png$/,   //匹配JS文件  
          use:{
            loader:'url-loader',
            options:{
              limit: 800
            }
          }
        },
     ]
    },
    optimization:{
      runtimeChunk: {
        name: "manifest"
      },
      splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
    },
 };