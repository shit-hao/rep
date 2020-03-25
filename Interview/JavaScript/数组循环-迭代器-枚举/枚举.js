// 在对象里有一个很重要的概念，是否有枚举
// 一般通过Object.defineProperty 设置枚举属性enumerable
// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// Object.prototype.propertyIsEnumerable() 方法返回一个布尔值，表示指定的属性是否可枚举。
// e.g.
let obj = {b:50,a:30}
Object.defineProperties(obj,{
    a:{
        enumerable:true,
        value:30
    }
})
Object.defineProperty(obj,'c',{
        enumerable:true,
        value:30
})
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(element)
    }
}