#开发
使用 source map
用途: 当多个js文件打包成一个bundle.js时,当其中一个js出现错误时,浏览器会简单的将错误指向bundle.js,然后这对开发人员凯硕并没有什么用处,所以使用source map来定位错误真正的来源
只需要在导出的对象中加入一项devtool: 'inline-source-map'即可开启该功能
每次要编译代码时，手动运行 npm run build 就会变得很麻烦。

webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：

webpack's Watch Mode 
webpack --watch
webpack-dev-server WDS
npm install --save-dev webpack-dev-server
声明devServer对象contentBase字段表示将这个目录下的文件作为可访问文件
webpack-dev-middleware
webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。
#模块热替换
Hot Module Replacement 或 HMR,它允许在运行时更新各种模块，而无需进行完全刷新(普通配置的devServer在监听到变化时会完全刷新页面,此功能增加了一些开发效率)。
启用HMR只需要在webpack-dev-server的对象声明中hot:true即可
使用了2个插件
new webpack.NamedModulesPlugin() 以便更容易查看要修补(patch)的依赖
new webpack.HotModuleReplacementPlugin()//作用未知
#tree shaking
ree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。
它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。
使用import和export导出导入模块,在有些未使用到的模块需要能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）,你也可以在package.json中标记哪些文件是无副作用,可以安全删除的
{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js"
  ]
}
最后使用类似UglifyJSPlugin的plugin来压缩输出,在webpack4中，你可以直接配置mode:production，直接压缩输出，或者在命令行中使用--optimize-minimize，或者在config.js中添加
#生产环境构建
开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。
为了遵循Don't repeat yourself - DRY原则,使用 webpack-merge
Minification(代码缩减)
注意，虽然 UglifyJSPlugin 是代码压缩方面比较好的选择，但是还有一些其他可选择项。以下有几个同样很受欢迎的插件：
BabelMinifyWebpackPlugin
ClosureCompilerPlugin


source map
虽然在生产环境使用source map不被推荐,但是他的确对debug和一些运行基准测试(benchmark tests)很有用,虽然有如此强大的功能，然而还是应该针对生成环境用途，选择一个构建快速的推荐配置

指定环境

Split CSS(分割css)
通常最好的做法是使用 ExtractTextPlugin 将 CSS 分离成单独的文件。
#代码分离
此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。
有三种常用的代码分离方法：

1.入口起点：使用 entry 配置手动地分离代码。
2.防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
3.动态导入：通过模块的内联函数调用来分离代码。

1缺点
a.如果多个入口文件都引入了一个依赖,无法有效的做代码拆分。
b.不够灵活,并且不能将核心应用程序逻辑进行动态拆分代码

防止重复
splitChunks 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件

#动态导入
2种方式可以动态代码拆分，,一种是符合es规范的import,另一种是则是使用 webpack 特定的 require.ensure
#bundle 分析
webpack-chart: webpack 数据交互饼图。
webpack-visualizer: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
webpack-bundle-analyzer: 一款分析 bundle 内容的插件及 CLI 工具，以便捷的、交互式、可缩放的树状图形式展现给用户。
##懒加载
懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。
懒加载基于代码分离 使用异步的import导入 类似
```
button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     var print = module.default;

     print();
   });
```
这样就可以将print.js打成的包分离出来,如果用户不执行这个操作就永远不会请求这段代码
webpackChunkName指明了bundle的名字
#缓存
以上，我们使用 webpack 来打包我们的模块化后的应用程序，webpack 会生成一个可部署的 /dist 目录，然后把打包后的内容放置在此目录中。只要 /dist 目录中的内容部署到服务器上，客户端（通常是浏览器）就能够访问网站此服务器的网站及其资源。而最后一步获取资源是比较耗费时间的，这就是为什么浏览器使用一种名为 缓存 的技术。可以通过命中缓存，以降低网络流量，使网站加载速度更快，然而，如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。
可以使用webpack output.filename 去配置文件名 [hash]通常是指构建相关(build-specific)的hash [chunkhash]指chunk相关(chunk-specific)的hash,官方推荐我们使用[chunkhash]

hash存在的问题
1.使用hash对js和css进行签名时,值是一样的。
2.原因是因为, hash 字段是根据每次编译compilation的内容计算所得，也可以理解为项目总体文件的hash值，而不是针对每个具体文件的。(所以每一次编译都会有一个新的hash，并不适用),每改动一个文件，全部的hash都会发生变化
3.不用hash，而用 chunkhash (js和css要使用chunkhash)， chunkhash 的话每一个js的模块对应的值是不同的(根据js里的不同内容进行生成)
这里的意思是，如果不做修改，文件名可能会变，也可能不会
这也是因为 webpack 在入口 chunk 中，包含了某些样板(boilerplate)，特别是 runtime 和 manifest。（译注：样板(boilerplate)指 webpack 运行时的引导代码）
输出可能会因当前的 webpack 版本而稍有差异。新版本不一定有和旧版本相同的 hash 问题，但我们以下推荐的步骤，仍然是可靠的。
#提取模板(Extracting Boilerplate)
CommonsChunkPlugin 有一个较少有人知道的功能是，能够在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来。通过指定 entry 配置中未用到的名称，此插件会自动将我们需要的内容提取到单独的包中：
     new webpack.optimize.CommonsChunkPlugin({
       name: 'manifest'
     })
 //老版本
 optimization:{
      runtimeChunk: {
        name: "manifest"
      }
    }
 //新版本
 这样就能把manifest bundle给单独打包出来
 CommonsChunkPlugin在webpack4中已被弃用,使用SplitChunksPlugin代替
 splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
        打包vendor
 模块标识符(Module Identifiers)(chunkhash)
    main bundle 会随着自身的新增内容的修改，而发生变化。
    vendor bundle 会随着自身的 module.id 的修改，而发生变化。
    manifest bundle 会因为当前包含一个新模块的引用，而发生变化。
  第一项和最后一项是正常可以预料到的 但是第二项 vendor基本不会发生变化,我们需要修复vendor的hash变化
  第一个插件是 NamedModulesPlugin，将使用模块的路径，而不是数字标识符。虽然此插件有助于在开发过程中输出结果的可读性，然而执行时间会长一些。第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建：
  #创建 library
  除了打包应用程序代码，webpack 还可以用于打包 JavaScript library。
  https://www.webpackjs.com/guides/author-libraries/(没怎么看懂)
  #shimming
    webpack 编译器(compiler)能够识别遵循 ES2015 模块语法、CommonJS 或 AMD 规范编写的模块。然而，一些第三方的库(library)可能会引用一些全局依赖（例如 jQuery 中的 $）。这些库也可能创建一些需要被导出的全局变量。这些“不符合规范的模块”就是 shimming 发挥作用的地方。
    
    我们不推荐使用全局的东西！在 webpack 背后的整个概念是让前端开发更加模块化。也就是说，需要编写具有良好的封闭性(well contained)、彼此隔离的模块，以及不要依赖于那些隐含的依赖模块（例如，全局变量）。请只在必要的时候才使用本文所述的这些特性。