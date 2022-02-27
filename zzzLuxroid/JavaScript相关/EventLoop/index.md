微任务：
process.nextTick
MutationObserver
Promise.then catch finally
宏任务：
I/O
setTimeout
setInterval
setImmediate
requestAnimationFrame

MutationObserver接口提供了监视对DOM树所做更改的能力。它被设计为旧的Mutation Events功能的替代品，该功能是DOM3 Events规范的一部分。

window.setImmediate
该方法用来把一些需要长时间运行的操作放在一个回调函数里，在浏览器完成后面的其他语句后，就立刻执行这个回调函数。
var immediateID = setImmediate(func, [param1, param2, ...]);
var immediateID = setImmediate(func);
async function f1() {
    return new Promise((resolve) => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
}
async function run() {
    console.log(1)
    new Promise((resolve) => {
        console.log(2)
        resolve()
    }).then(() => {
        console.log(3)
    })
    await f1()
    setTimeout(() => {
        console.log(6)
    }, 0)
    console.log(7)
}
run()

1
2
4
3
5
7
6
这个EventLoop牛逼啊

