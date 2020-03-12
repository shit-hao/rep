http://www.alloyteam.com/2012/03/web-cache-2-browser-cache/
https://www.cnblogs.com/xianyulaodi/p/5755079.html
可以从几个方面考虑
1.网络方面
    1.减少DNS查询时间(尽量使用同一个域名)
    2.合并HTTP请求(雪碧图,WebScoket,合并JS,CSS文件,减少Cookie体积,或者根据业务场景不携带Cookie等)
    3.合理使用强缓存,协商缓存,CDN缓存等
    4.图片等媒体资源的压缩(GZIP)
    5.使用CDN
2.前端代码方面
    1.样式代码放前面,JS代码置后(样式放前面,因为浏览器能让页面看起来加载地更快,他会尽快的展示已渲染完毕的内容)
    2.组件,路由懒加载
    3.减少监听器,使用事件委托,减少DOM操作或者优化DOM操作,使用虚拟DOM
    4.精简代码(合并JS,CSS)
4.用户体验方面
    1.加Loading
    2.使用懒加载图片



ps js加载标签的三种方式
1.<script src="script.js"></script>

没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，
也就是说不等待后续载入的文档元素，读到就加载并执行。

2.<script async src="script.js"></script>

有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

3.<script defer src="myscript.js"></script>

有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），
但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
