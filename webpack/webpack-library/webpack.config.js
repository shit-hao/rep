let path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    entry:{
        main:'./src/index.js'
    },
    output:{
        ////__dirname 总是指向被执行 js 文件的绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
    externals:{
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
            }
    }
}