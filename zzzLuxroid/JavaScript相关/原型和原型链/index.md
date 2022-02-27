https://github.com/mqyqingfeng/Blog/issues/2
https://juejin.cn/post/6844903837623386126

原型链别的就不说了  
单独看__proto__ 这个属性
这是一个访问器属性 有getter和setter
这个属性是一个隐藏属性 官方并不推荐我们使用 
这个属性指向构造函数的原型

__proto__的读取器(getter)暴露了一个对象的内部 [[Prototype]] 。对于使用对象字面量创建的对象，这个值是 Object.prototype。对于使用数组字面量创建的对象，这个值是 Array.prototype。对于functions，这个值是Function.prototype。对于使用 new fun 创建的对象，其中fun是由js提供的内建构造器函数之一(Array, Boolean, Date, Number, Object, String 等等），这个值总是fun.prototype。对于用js定义的其他js构造器函数创建的对象，这个值就是该构造器函数的prototype属性。

这个属性不推荐使用 
可以用使用Object.getPrototypeOf/Reflect.getPrototypeOf或者Object.setPrototypeOf/Reflect.setPrototypeOf代替这个访问器属性

原型链主要是靠这个属性在维持


当我们使用Object.create或者new操作符新建了一个对象时 这是原型链的延续


每个函数都有一个prototype 这里可以将函数理解为构造函数(每个函数都可以用来当构造函数箭头函数以外，obj不行) 最后new 构造函数
生成的对象的__proto__会指向这个prototype对象
__proto__ 是原型链的关键,但是这个属性虽然大多数现代浏览器已经内置但是官方已废弃,更推荐使用新出的
Object.getPrototypeOf/Reflect.getPrototypeOf或者Object.setPrototypeOf/Reflect.setPrototypeOf代替这个访问器属性


mdn原话
已废弃
该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性
警告: 通过现代浏览器的操作属性的便利性，可以改变一个对象的 [[Prototype]] 属性, 这种行为在每一个JavaScript引擎和浏览器中都是一个非常慢且影响性能的操作，
使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 obj.__proto__ = ... 语句上, 它还会影响到所有继承来自该 [[Prototype]] 的对象，
如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()。
警告: 当Object.prototype.__proto__ 已被大多数浏览器厂商所支持的今天，
其存在和确切行为仅在ECMAScript 2015规范中被标准化为传统功能，以确保Web浏览器的兼容性。
为了更好的支持，建议只使用 Object.getPrototypeOf()。

new Object() Object也是一个函数

对象的构造函数都是Object函数

原型链的顶端是null Object.prototype.__proto__ === null true

https://segmentfault.com/img/bVytP4



https://github.com/mqyqingfeng/Blog/issues/2


update
原型链
function Person() {}
var person1 = new Person()
var person2 = new Person()
person1.constructor === person1.__proto__.constructor // true
person1.constructor === Person.prototype.constructor // true
得出constructor属性其实不在示例对象上，为了节省内存放在原型上
__proto__指向构造函数的原型，理论上是这样的，但是不能依赖对象的方式点出来，可能是js内部做了劫持操作
Person.prototype.__proto__ === Object.prototype

原型链通过__proto__继承

手写new, 理解这些概念之后手写new就简单了不少 哈哈

function myNew(func, ...args){
  let newObj = {}
  newObj.__proto__ === func.prototype
  let result = func.call(newObj, ...args)
  console.log(args)
}

function hh(){
  this.hhh = true
}