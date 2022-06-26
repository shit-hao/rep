https://didiheng.com/front/2020-10-21.html#%E8%B0%83%E7%94%A8%E6%8B%A6%E6%88%AA%E5%99%A8%E5%87%BD%E6%95%B0%E5%92%8C%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0

http://www.axios-js.com/zh-cn/docs/

https://juejin.cn/post/6885471967714115597#heading-15

https://mp.weixin.qq.com/s/GNYpgHo97xml0NxT93dHxQ?

就是对ajax做了封装，然后再挂在axios上

axios可以防csrf攻击
双重验证
请求头，cookie

一个比较有意思的点就是 拦截器的实现机制

一个队列 
[请求成功拦截器，请求失败拦截器，请求，undefined, 响应成功拦截器，响应失败拦截器]
