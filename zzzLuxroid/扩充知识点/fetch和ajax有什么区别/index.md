1. ajax和fetch的区别 ：

（1）、ajax是理用XMLHttpRequest对象来请求数据的，而fetch是window的一个方法

（2）、ajax基于原生的XHR开发，XHR本身的架构不清晰，已经有了fetch的替代方案

（3）、fetch比较与ajax有着更好更方便的写法

（4）、fetch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理

（5）、fetch没有办法原生监测请求的进度，而XHR可以

请注意，fetch 规范与 jQuery.ajax() 主要有以下的不同：

当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve（如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 ok 属性为 false），仅当网络故障时或请求被阻止时，才会标记为 reject。
fetch 不会发送跨域 cookie，除非你使用了 credentials 的初始化选项。（自 2018 年 8 月以后，默认的 credentials 政策变更为 same-origin。Firefox 也在 61.0b13 版本中进行了修改）