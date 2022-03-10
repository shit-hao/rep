// 3个参数 限制 数组 执行的函数
// limit=2
// 思路 肯定需要一个变量存储函数被调用了几次 然后把这个数字和正在执行的pro做对比 超过了2个 就return Promise.race 若没超过 就直接执行promise ✔️
// 不是啊 别晕 只要保证2个promise就行 队列可以维护多个 执行中的promise只有2个就可以
// 肯定不是进来一个执行一个 保证2个 不行 要用闭包 r一直是Promise.resolve()

// 思路 每个promise都要执行 但是执行到limit的时候使用Promise.race 包装存起来的list 后续的动作都基于这个链条  好像有点奇怪
// 这题不会做
let limit = 2
let proList = [] //存promise索引
let executing = [] //正在队列中执行的数组
let r = ''

function asyncPool(v, fn) { 1

    if (executing.length >= 2) { //下一次执行该函数 执行中的任务大于等于2个的话 就取Promise.race 前2个谁最先执行 然后塞下一个 给搞晕了 和时间没关系 给想复杂了
        console.log('大于',v)
        r = Promise.race(executing)
        r = r.then(() => { //同步的 executing 不变
            let pro = fn(v) //执行promise 
            proList.push(pro)
            let e = pro.then(() => {
                executing.splice(executing.indexOf(e), 1)
            })
            executing.push(e)
        })
    } else {
        console.log('小于',v)
        let pro = fn(v) //执行promise 一开始 //不超过限制
        proList.push(pro)
        let e = pro.then(() => {
            executing.splice(executing.indexOf(e), 1)
        })
        executing.push(e)
    }
}
const timeout = (i) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(i)
        }, i)
    })
}
asyncPool(3000, timeout)
asyncPool(1000, timeout)
asyncPool(3000, timeout)
asyncPool(4000, timeout)
asyncPool(5000, timeout)
