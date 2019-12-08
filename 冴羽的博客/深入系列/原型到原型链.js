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


