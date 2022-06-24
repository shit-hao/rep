preload 加载当前路由必需资源，优先级高。一般对于 Bundle Spliting 资源与 Code Spliting 资源做 preload
prefetch 优先级低，在浏览器 idle(空闲) 状态时加载资源。一般用以加载其它路由资源，如当页面出现 Link，可 prefetch 当前 Link 的路由资源。（next.js 默认会对 link 做懒加载+prefetch，即当某条 Link 出现页面中，即自动 prefetch 该 Link 指向的路由资源


浏览器会缓存preload的资源

可以强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源。

preload可用户提前加载你认为更重要的资源，比如一个字体文件，比如一个js文件

通过预加载某个资源，您希望浏览器可以比正常发现它更早地获取该资源，因为您认为它对当前页面很重要。

https://github.com/shfshanyue/Daily-Question/issues/286

https://zhuanlan.zhihu.com/p/48521680