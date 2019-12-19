// 3个参数 限制 数组 执行的函数
// limit=2
// 思路 肯定需要一个变量存储函数被调用了几次 然后把这个数字和正在执行的pro做对比 超过了2个 就return Promise.race 若没超过 就直接执行promise ✔️
// 不是啊 别晕 只要保证2个promise就行 队列可以维护多个 执行中的promise只有2个就可以
// 肯定不是进来一个执行一个 保证2个 不行 要用闭包 r一直是Promise.resolve()

// 思路 每个promise都要执行 但是执行到limit的时候使用Promise.race 包装存起来的list 后续的动作都基于这个链条  好像有点奇怪
let limit = 2
let proList = [] //存promise索引
let executing = [] //正在队列中执行的数组
let r = Promise.resolve()

function asyncPool(v, fn) {
    r.then(()=>{
        console.log('到我了')
        let pro = fn(v)
        proList.push(pro)
        let e = pro.then(() => {
            executing.splice(executing.indexOf(e), 1)
        })
        executing.push(e);
        if(executing.length >=2){
            r = Promise.race(executing)
        }else{
            r = e
        }
        return r
    })
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

//1秒输出1000 5秒计时中
//4秒输出3000
//5秒输出5000



