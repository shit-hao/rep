// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in
// 一般用于遍历对象 不依赖迭代器
// for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。
// 可枚举属性原型上的属性也会遍历出来
let o = {a:3}
// o.prototype = {c:40,d:90}

for (const key in o) {
    // if (o.hasOwnProperty(key)) {
        console.log(key)
        const element = o[key];
        console.log(element)
    // }
}
// 一般对象字面量不需要考虑hasOwnProperty因为对象字面量的原型链是死的 
// obj.__proto__ === Object.prototype就算遍历的话也都是一些不可枚举的属性 所以并没有意义。
// 需要考虑hasOwnProperty一般是使用构造函数new出来的对象
// e.g
function con (){
    this.a = 30
    this.b = 49
}
con.prototype = {c:40,d:90}
let c = new con()
for (const key in c) {
    // if(c.hasOwnProperty(key)){
        console.log(key)
    // }
}
