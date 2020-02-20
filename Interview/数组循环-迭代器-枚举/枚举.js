// 在对象里有一个很重要的概念，是否有枚举
// 一般通过Object.defineProperty 设置枚举属性enumerable
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
// e.g.
let obj = {b:50,a:30}
Object.defineProperties(obj,{
    a:{
        enumerable:true,
        value:30
    }
})
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(element)
    }
}