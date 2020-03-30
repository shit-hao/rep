// 找出每个元素右边比他大的第一个元素
// 输入[5 ,6 ,8 ,2 ,10 ,9]
// 返回[6 ,8 ,10, 10 ,-1 ,-1]

let a = [5 ,6 ,8 ,2 ,10 ,9]
let tmp = [0] //临时保存位置
let res = [] //结果
let i = 1
while (i < a.length) {
    if (tmp.length != 0 && a[i] > a[tmp[tmp.length - 1]]) {
        res[tmp.pop()] = a[i]
    } else {
        tmp.push(i)
        i += 1
    }
}

console.log(res)
