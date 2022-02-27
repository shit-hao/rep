runtime+compile
在端上完成模板文件到render函数的转化有性能损耗运行时转换


Runtime Only

我们在使用 Runtime Only 版本的 Vue.js 的时候，通常需要借助如 webpack 的 vue-loader 工具把 .vue 文件编译成 JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量。 在将 .vue 文件编译成 JavaScript的编译过程中会将组件中的template模板编译为render函数，所以我们得到的是render函数的版本。所以运行的时候是不带编译的，编译是在离线的时候做的


用webpack插件离线完成.vue文件->.js的转换既模板文件到render函数

推荐使用Runtime Only的Vue