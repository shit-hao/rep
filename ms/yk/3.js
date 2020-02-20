// 手动实现一个深拷贝
function deepClone(obj){
    console.log(obj)
    // for (const key of obj) {
    //     console.log(key)
    // }
}
let o = {
    a: 3,
    b: 4
}
deepClone(o)