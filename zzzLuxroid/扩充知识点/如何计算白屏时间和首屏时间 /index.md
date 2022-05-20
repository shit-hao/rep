白屏时间: window.performance.timing.domLoading - window.performance.timing.navigationStart

首屏时间: window.performance.timing.domInteractive - window.performace.timing.navigationStart

https://github.com/shfshanyue/Daily-Question/issues/469

PerformanceTiming.domLoading 是一个返回代表一个时刻的 unsigned long long 型只读属性，为解析器开始工作，即 Document.readyState 改变为 'loading' 并且 readystatechange (en-US) 事件被触发之时的 Unix毫秒时间戳。

PerformanceTiming.domInteractive 是一个返回代表一个时刻的 unsigned long long 型只读属性，为在主文档的解析器结束工作，即 Document.readyState 改变为 'interactive' 并且相当于 readystatechange (en-US) 事件被触发之时的 Unix毫秒时间戳。

PerformanceTiming.navigationStart 是一个返回代表一个时刻的 unsigned long long 型只读属性，为紧接着在相同的浏览环境下卸载前一个文档结束之时的 Unix毫秒时间戳。如果没有上一个文档，则它的值相当于 PerformanceTiming.fetchStart。