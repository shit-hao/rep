hash
hash是对webpack整个一次构建而言，在webpack构建中，文件都会带上对应的MD5值，构建生成的文件hash值都是一样的。如果出口是hash，那么一旦针对项目中任何一个文件的修改，都会构建整个项目，重新获取hash值。如果有目的性的缓存就会失败。
chunkhash
chunkhash的范围可以针对某个模块而言，它会从入口出发，对依赖文件进行解析，构建对应的chunk和hash值。一般的使用是在生产环境对公共库和程序入口文件单独抽离开，单独打包构建，用chunkhash的方式对这些打包后的文件带上相应hash值。在线上，只要公共库和入口没变，其hash值就不会改变，从而达到缓存的目的。

contenthash
contenthash的范围更具体和更小，即对某一个文件而言，在webpack中的用法一般是分离js和css，单对css文件来设置。因为上面的chunkhash存在一个问题：