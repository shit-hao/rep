//3个参数 限制 数组 执行的函数
//把所有的promise维护到一条链条上 判断执行中的数量 动态的把链条中的pro更换为promise.race
//Promise.race 将所有的promise都打进一个对列 找最先出来的 并不依靠顺序
//这是一个递归
function asyncPool(limit, arr, fn) {
    let i = 0 //执行到数组的第几个的闭包
    let executing = [] //正在队列中执行的数组
    let proList = [] //存promise索引
    const enqueue = function () {
        if (i === arr.length) {
            return Promise.resolve()
        }
        let item = arr[i++] //相当于一个递归
        let pro = fn(item) //在这里就执行了promise
        proList.push(pro)
        let e = pro.then(() => {
            executing.splice(executing.indexOf(e), 1)
        })
        executing.push(e);
        let r = Promise.resolve()
        if (executing.length >= limit) {
            r = Promise.race(executing)
        }
        return r.then(() => enqueue())
    }
    return enqueue().then(() => {
        return Promise.all(proList)
    });
}
const timeout = (i) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(i)
            res(i)
        }, i)
    })
}
asyncPool(2, [4000, 1000, 3000,4000,5000], timeout).then(results => {
    console.log(results)
});
//1秒输出1000 (7000计时中)拉下一个
//3秒输出2000

