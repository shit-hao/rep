https://github.com/shfshanyue/Daily-Question/issues/84
根据谷歌Web开发者网站总结的性能优化点:

资源加载优化
衡量性能指标
Lab Data, 在规范的特定条件下，对Web应用的各项指标进行评估，典型工具如谷歌的 lighthouse
RUM，基于真实用户的性能指标监控，包括FCP，FID，CLS等，参考 https://web.dev/user-centric-performance-metrics/
瀑布图，借助 performance API 记录整个站点和各个资源的加载时长
优化资源大小(字节数)
评估各资源的用途并评估是否可以直接移除
通过压缩技术(minimize和compress)减少文本类资源(CSS,JavaScript,HTML)大小
选择合适的图片格式、裁剪图片、懒加载图片等，通过picture标签响应式地返回图片，参考 https://www.jianshu.com/p/607567e488fc
预加载和长期缓存字体，参考 https://web.dev/optimize-webfont-loading/
减少HTTP请求次数
合并文本资源，比如使用webpack这样的bundle技术
合并图片资源，比如雪碧图
内联内容较小的资源到html中，比如data url
善用HTTP缓存
本地缓存命中顺序，内存缓存 => Service Worker 缓存 => HTTP缓存(磁盘缓存) => HTTP/2 Push缓存，参考 https://calendar.perfplanet.com/2016/a-tale-of-four-caches/
https://web.dev/http-cache/
优化JavaScript
JavaScript的处理过程：下载(fetch) => 解压 => 解析(代码转换为AST) => 编译(AST转换为字节码) => 执行
死代码消除(Tree Shaking)，减小总体传输文件大小
Code Spliting + 基于路由的按需加载，减小首次渲染的传输文件大小
优化首次渲染路径
渲染路径: DOM树构建 => CSSOM树构建 => Render Tree构建 => 样式计算 => 布局 => 绘制位图 => 合成图层
通过媒体查询避免首次渲染时加载不必要的CSS文件
将对页面结构无影响的JS文件标记为 async 和 defer，避免阻塞html解析
渲染优化
使用 requestAnimationFrame 代替 setTimeout 和 setInterval 来更新视图，减少卡顿
将计算密集型的JavaScript代码移动到 Web Worker 中执行，避免占用主线程
使用复杂度更低、class风格的CSS选择器；减少频繁变动的CSS样式的影响元素个数
使用性能更高的 flex 布局代替 float 布局
避免对 offsetHeight 等dom属性的频繁访问，导致重绘和重排操作队列的频繁同步执行
在 performance profiling 之后，将频繁变动的动画部分所属的dom元素标记为 will-change，独立构成一个图层