//3个参数 限制 数组 执行的函数
function asyncPool(limit, arr, fn) {
    let i = 0 //执行到数组的第几个的闭包
    let executing = [] //正在队列中执行的数组
    let proList = [] //存promise索引
    const enqueue = function () {
        if (i === arr.length) {
            return Promise.resolve()
        }
        let item = arr[i++]
        let pro = fn(item)
        proList.push(pro)
        let e = pro.then(() => {
            executing.splice(executing.indexOf(e), 1)
        })
        executing.push(e);
        console.log(executing)
        let r = Promise.resolve()
        if (executing.length >= limit) {
            r = Promise.race(proList)
        }
        return r.then(() => enqueue())
    }
    return enqueue().then(() => {
        console.log('proList')
        console.log(proList)
        return Promise.all(proList)
    });
}

const timeout = (i) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(i)
        }, i)
    })
}

asyncPool(2, [1000, 5000, 3000, 2000], timeout).then(results => {
    console.log('results')
    console.log(results)
});
