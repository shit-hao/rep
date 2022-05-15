对于 pv 量比较高的页面，比如b站等流量图也比较大的，采用ssr
采用 ssr 如何优化性能

性能瓶颈在于 react-dom render/hydrate 和 server 端的 renderToString
尽量减少 dom 结构， 采用流式渲染，jsonString 一个对象，而不是 literal 对象
server 去获取数据
不同情况不同分析，减少主线程阻塞时间
减少不必要的应用逻辑在服务端运行
减少依赖和包的体积

利用 webpack 的 contenthash 缓存
重复依赖包处理，可以采用 pnpm
采用code splitting，减少首次请求体积
减少第三方依赖的体积
FP (First Paint) 首次绘制
FCP (First Contentful Paint) 首次内容绘制
LCP (Largest Contentful Paint) 最大内容渲染
DCL (DomContentloaded)
FMP(First Meaningful Paint) 首次有效绘制
L (onLoad)
TTI (Time to Interactive) 可交互时间
TBT (Total Blocking Time) 页面阻塞总时长
FID (First Input Delay) 首次输入延迟
CLS (Cumulative Layout Shift) 累积布局偏移
SI (Speed Index)
一些性能指标可以监控性能

4.网络 prefetch cdn

https://github.com/shfshanyue/Daily-Question/issues/688