// webpack.config.js
var HelloWorldPlugin = require('./src/loader/demo-loader');
const path = require('path')

// module.exports = {
//   // ... 这里是其他配置 ...
//   plugins: [new HelloWorldPlugin({ options: true })]
// };


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [new HelloWorldPlugin({ options: true })],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: './src/loaders/hmw-loader.js',
  //     },
  //   ],
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
  },
}