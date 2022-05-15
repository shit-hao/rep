https://github.com/shfshanyue/Daily-Question/issues/739

1.排查兼容性。大部分原因是因为低端机型/浏览器低版本 polyfill的问题导致报错
2.排查网络。js是否下载成功 cdn是否生效
3.做js错误上报。分析是否存在代码缺陷
4.做重试逻辑/诱导用户重试
5.Error Boundry避免整页崩溃。限制在组件级别

errorCaptured 组件级别
errorHandler Vue 全局
window.onerror

一般而言，只要代码中抛出的错误，没有被拦截，最终都会被 window.onerror 捕获到——所以需要强调以下特殊情况：

像 errorHandler 这种 API 会拦截错误，所以使用自定义函数对框架 API 进行增强。
特殊错误如 Promise 中的异常，需要使用 window.addEventListener('unhandledrejection', event => ···) 进行捕获
