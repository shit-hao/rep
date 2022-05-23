const path = require('path')
const luxLoader = require('./loader/lux-loader')
module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.lux$/,
        use: luxLoader,
      }
    ]
  }
}