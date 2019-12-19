// 3个参数 限制 数组 执行的函数
// limit=2
// 思路 肯定需要一个变量存储函数被调用了几次 然后把这个数字和正在执行的pro做对比 超过了2个 就return Promise.race 若没超过 就直接执行promise ✔️
// 不是啊 别晕 只要保证2个promise就行 队列可以维护多个 执行中的promise只有2个就可以
// 肯定不是进来一个执行一个 保证2个
let limit = 2
let proList = [] //存promise索引
let executing = [] //正在队列中执行的数组
let r = Promise.resolve()

function asyncPool(v, fn) {
    r.then(()=>{
        let pro = fn(v)
        proList.push(pro)
        let e = pro.then(() => {
            executing.splice(executing.indexOf(e), 1)
        })
        executing.push(e);
        if(executing.length >=2){
            r = Promise.race(proList)
        }else{
            r = pro
        }
        return r
    })
}
const timeout = (i) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('setTimeout')
            console.log(i)
            res(i)
        }, i)
    })
}

asyncPool(1000, timeout)
asyncPool(5000, timeout)
asyncPool(3000, timeout)

//1秒输出1000 5秒计时中
//4秒输出3000
//5秒输出5000



