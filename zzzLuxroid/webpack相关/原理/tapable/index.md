https://juejin.cn/post/6974573181356998669
https://blog.csdn.net/github_38140984/article/details/83013823
tapable是webpack的核心
tap 注册
call 执行
类似eventemitter

有9种钩子

const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");

1.Sync：只能被同步函数注册，如 myHook.tap()
2.AsyncSeries：可以被同步的，基于回调的，基于 promise 的函数注册，如 myHook.tap()，myHook.tapAsync() ， myHook.tapPromise()。执行顺序为串行
3.AsyncParallel：可以被同步的，基于回调的，基于 promise 的函数注册，如 myHook.tap()，myHook.tapAsync() ， myHook.tapPromise()。执行顺序为并行

syncHook,SyncBailHook,SyncWaterfallHook,SyncLoopHook 同步(sync)

AsyncSeriesHook,AsyncSeriesBailHook,AsyncSeriesWaterfallHook(异步串行)

AsyncParallelHook, AsyncParallelBailHook(异步并行)

执行模式分类
无修饰（base）(SyncHook,AsyncParallelHook,AsyncSeriesHook)
执行每一个事件函数，不关心函数的返回值
bail(保释)(SyncBailHook,AsyncParallelBailHook,AsyncSeriesBailHook)
执行每个事件函数，直到有返回值且不为undefined为止，不在继续执行或者全部执行完
Waterfall(瀑布)(SyncWaterfallHook,AsyncSeriesWaterfallHook,)
执行每个事件函数，且result会传递给下一个时间函数的第一个参数
Loop(循环) 循环执行每个事件函数，知道所有函数结果 result === undefined

SyncWaterfallHook客观上是会丢失参数，但是这个可以理解为是hook的特性。

tap->call
tapAsync->callAsync
tapPromise->hook.promise.then(()) tapPromise必须返回一个promise不然会报错

callAsync除了可以传入特定的参数外，最后一个参数也可以传递，所有的异步任务执行完后会执行最后一个参数的cb