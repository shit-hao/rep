Node中的EventLoop

https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/

阶段概述
1.定时器：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
2.待定回调：执行延迟到下一个循环迭代的 I/O 回调。
3.idle, prepare：仅系统内部使用。
4.轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate() 调度的之外），其余情况 node 将在适当的时候在此阻塞。
5.检测：setImmediate() 回调函数在这里执行。
6.关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。