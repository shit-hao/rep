关于Code Splitting
webpack提供了三种方式
1.入口配置：entry 入口使用多个入口文件；
2.抽取公有代码：使用 SplitChunks 抽取公有代码；
3.动态加载 ：动态加载一些代码。(懒加载)

1缺点: 当入口文件都引用了同一个依赖时,无法有效的拆分那些代码

主要使用2 ,webpack官方也推荐我们使用SplitChunks去灵活的拆分代码

https://juejin.im/post/5af1677c6fb9a07ab508dabb
常用参数

module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async', 
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
参数说明:

chunks：表示从哪些chunks里面抽取代码，除了三个可选字符串值 initial、async、all 之外，还可以通过函数来过滤所需的 chunks；
minSize：表示抽取出来的文件在压缩前的最小大小，默认为 30000(30KB)；
maxSize：表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；
minChunks：表示被引用次数，默认为1；
maxAsyncRequests：最大的按需(异步)加载次数，默认为 5；
maxInitialRequests：最大的初始化加载次数，默认为 3；
automaticNameDelimiter：抽取出来的文件的自动生成名字的分割符，默认为 ~；
name：抽取出来文件的名字，默认为 true，表示自动生成文件名；
cacheGroups: 缓存组。（这才是配置的关键）
