// 手写函数柯力化
function curry(fn, ...outerArgs) {
  let length = fn.length
  return function (...innerArgs) {
    let self = this
    let allArgs = outerArgs.concat(innerArgs)
    if(allArgs.length < length){ //继续收集参数
      return curry.call(self, fn, ...allArgs)
    } else {
      return fn.call(self, ...allArgs)
    }
  }
}

let add = function (a,b,c) {
  console.log(a + b + c)
}

curry(add)(1)(2)(3)

// 手写call, apply, bind
Function.prototype.myCall = function (context, ...args) {
  let name = Symbol('fn')
  context[name] = this
  let result = context[name](...args)
  delete context[name]
  return result
}

Function.prototype.myApply = function (context, arg) {
  let name = Symbol('fn')
  context[name] = this
  let result = context[name](arg)
  delete context[name]
  return result
}

Function.prototype.myBind = function (context, ...args) { //函数颗粒化的一种
  let self = this
  return function (...innerArgs) {
    let allArgs = args.concat(innerArgs)
    return self.call(context, ...allArgs)
  }
}

//  调用一个函数 和new 一个函数实现一致

function A() {
  this.a = 3
  if(!(this instanceof A)){ 
    return new A()
  } 
}

// 寄生组合继承

// 原型链继承
function SuperType() {
  this.name = 'SuperType'
}
SuperType.prototype.sayName = () => {
  console.log('this.name')
  console.log(this.name)
}

function SubType() {
  this.name = 'SubType'
}

SubType.prototype = new SuperType(); // 重写原型对象，代之以一个新类型的实例

SubType.prototype.saySubName = function () { // 子类原型方法
  return this.subName;
}
// 缺点 在子类中修改父类的属性会同步到所有实例 pass

// 2.构造继承 在子类的构造函数中调用父类构造函数
// 父类
function SuperType (name) {
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType () {
  // 调用 SuperType 构造函数
  SuperType.call(this, 'SuperType'); // 在子类构造函数中，向父类构造函数传参
  // 为了保证子父类的构造函数不会重写子类的属性，需要在调用父类构造函数后，定义子类的属性
  this.subName = "SubType"; // 子类属性
};
// 子类实例
let instance = new SubType(); // 运行子类构造函数，并在子类构造函数中运行父类构造函数，this绑定到子类
// 只能继承父类的实例属性和方法，不能继承原型属性/方法

// 组合继承 将构造函数继承和组合继承合并 缺点调用2次SuperType()

// 寄生组合继承 调用构造函数+原型链混合

// 父类
function SuperType (name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类

function link(parent, child) {
  let agentObj = Object.create(parent.prototype)
  agentObj.constructor = child
  child.prototype = agentObj
}

function _create(o) {
  function F() {}
  F.prototype = o
  return new F()
}






