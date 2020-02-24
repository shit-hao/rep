// 手动实现一个深拷贝
function deepClone(obj){
    console.log(obj)
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            console.log(element)
        }
    }
}
let o = {
    a: 3,
    b: 4
}
deepClone(o)