terser 或者 uglify，及流行的使用 Rust 编写的 swc 压缩混淆化 JS。
gzip 或者 brotli 压缩，在网关处(nginx)开启
使用 webpack-bundle-analyzer 分析打包体积，替换占用较大体积的库，如 moment -> dayjs
使用支持 Tree-Shaking 的库，对无引用的库或函数进行删除，如 lodash -> lodash/es
对无法 Tree Shaking 的库，进行按需引入模块，如使用 import Button from 'antd/lib/Button'，此处可手写 babel-plugin 自动完成，但不推荐
使用 babel (css 为 postcss) 时采用 browserlist，越先进的浏览器所需要的 polyfill 越少，体积更小
code spliting，路由懒加载，只加载当前路由的包，按需加载其余的 chunk，首页 JS 体积变小 (PS: 次条不减小总体积，但减小首页体积)
使用 webpack 的 splitChunksPlugin，把运行时、被引用多次的库进行分包，在分包时要注意避免某一个库被多次引用多次打包。此时分为多个 chunk，虽不能把总体积变小，但可提高加载性能 (PS: 此条不减小总体积，但可提升加载性能)

https://github.com/shfshanyue/Daily-Question/issues/644