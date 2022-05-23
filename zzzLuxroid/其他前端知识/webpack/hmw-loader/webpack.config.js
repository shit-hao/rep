const path = require('path')
const Plugin = require('./src/plugin/hmw-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: './src/loaders/hmw-loader.js',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins:[
    new Plugin()
  ]
}