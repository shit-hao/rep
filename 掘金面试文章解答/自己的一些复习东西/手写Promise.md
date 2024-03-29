// 手写Promise 课外扩展
Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})
// console  0 1 2 4 3 5 6
// real console 0、1、2、3、4、5、6

// 因为首次执行宏队列中会有 script（整体代码块）任务，所以实际上就是 Js 解析完成后，在异步任务中，会先执行完所有的微任务，
// 这里也是很多面试题喜欢考察的。需要注意的是，新创建的微任务会立即进入微任务队列排队执行，不需要等待下一次轮回。

// 首先需要了解PromiseA+规范
// 要点摘要

// Promise 有4个术语
// 1.解决（fulfill）：指一个 promise 成功时进行的一系列操作，如状态的改变、回调的执行。虽然规范中用 fulfill 来表示解决，但在后世的 promise 实现多以 resolve 来指代之。
// 2.拒绝（reject）：指一个 promise 失败时进行的一系列操作。
// 3.终值（eventual value）：所谓终值，指的是 promise 被解决时传递给解决回调的值，由于 promise 有一次性的特征，因此当这个值被传递时，标志着 promise 等待态的结束，故称之终值，有时也直接简称为值（value）。
// 4.拒因（reason）：也就是拒绝原因，指在 promise 被拒绝时传递给拒绝回调的值。

// Promise 表示一个异步操作的最终结果，与之进行交互的方式主要是 then 方法，该方法注册了两个回调函数，用于接收 promise 的终值或本 promise 不能执行的原因。

// 一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。

// 等待态（Pending）可以到执行态（Fulfilled）和拒绝态（Rejected）

// 等待态（Pending）
//     可以迁移至执行态或拒绝态
// 执行态（Fulfilled）
//     不能迁移至其他任何状态
//     必须拥有一个不可变的终值
// 拒绝态（Rejected）
//     不能迁移至其他任何状态
//     必须拥有一个不可变的据因

// onFulfilled
// 当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数

// onRejected
// 当 Promise 变成接受状态或拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。  如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。

