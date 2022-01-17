// 找出每个元素右边比他大的第一个元素
// 输入[5 ,6 ,8 ,2 ,10 ,9]
// 返回[6 ,8 ,10, 10 ,-1 ,-1]
// 有点难 安静下来慢慢看

let a = [5, 6, 8, 2, 10, 9]
let tmp = [0] //需要比较的index 小
let res = [] //找到目标值 push
let i = 1 // 比较的目标index 大
while (i <= a.length) {
    if( i === a.length ){ // 角标前进到了数组长度 undefined
        res.push(...new Array(tmp.length).fill(-1,0)) // 判断tmp长度 赋值-1
        break
    }
    if (tmp.length !== 0 && a[i] > a[tmp[tmp.length - 1]]) {
        res[tmp.pop()] = a[i] // tmp.pop()给他排序
    } else { // 比较的基准值前进一位
        tmp.push(i) // 
        i += 1 // 每次i + 1 保证i 比较完之后 前进一位
    }
}

console.log(res)
