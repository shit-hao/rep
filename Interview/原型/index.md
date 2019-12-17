原型链别的就不说了  
单独看__proto__ 这个属性
这是一个访问器属性 有getter和setter
这个属性是一个隐藏属性 官方并不推荐我们使用 
这个属性指向构造函数的原型

__proto__的读取器(getter)暴露了一个对象的内部 [[Prototype]] 。对于使用对象字面量创建的对象，这个值是 Object.prototype。对于使用数组字面量创建的对象，这个值是 Array.prototype。对于functions，这个值是Function.prototype。对于使用 new fun 创建的对象，其中fun是由js提供的内建构造器函数之一(Array, Boolean, Date, Number, Object, String 等等），这个值总是fun.prototype。对于用js定义的其他js构造器函数创建的对象，这个值就是该构造器函数的prototype属性。

这个属性不推荐使用 
可以用使用Object.getPrototypeOf/Reflect.getPrototypeOf或者Object.setPrototypeOf/Reflect.setPrototypeOf代替这个访问器属性

原型链主要是靠这个属性在维持