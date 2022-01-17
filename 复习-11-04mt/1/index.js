// 写函数柯里化

function curry(fn, ...args) {
  let length = fn.length
  let allArgs = []
  allArgs.push(...args)
  return function (...args) {
    allArgs.push(...args)
    let self = this
    if (allArgs.length < length) {
      return curry.call(self, fn, ...allArgs)
    } else {
      return fn.call(self, ...allArgs)
    }
  }
}

function add(a, b, c) {
  return a + b + c
}

console.log(curry(add)(1)(2)(3))

//  var 和 let

function test(a) {
  var a = 3
  console.log('a')
  console.log(a)
}
test()

// 继承
//  1.原型链继承
function Father() {
  this.name = '父类的名字';
}
Father.prototype.getFatherName = function () {
  console.log('父类的方法');
}
function Son() {
  this.name = '子类的名字';
}
// 如果此时有Son的原型对象有方法或属性，下面Son.prototype = new Father()，由于原型重定向，原型上的方法和属性会丢失
Son.prototype.getAge = function () {
  console.log('子类的年龄')
}
Son.prototype = new Father(); // 核心:创建父类的实例，并将该实例赋值给子类的prototype
Son.prototype.getSonName = function () {
  console.log('子类的方法');
}
var son = new Son();
son.getFatherName(); // 父类的方法
Son.prototype.__proto__.getFatherName = function () { // 缺点：如果有多个实例对其父类原型，则会互相影响
  console.log('子类改变父类的方法');
}
son.getFatherName(); // 子类改变父类的方法
// 缺点：
// 父类使用this声明的属性(私有属性和公有属性)被所有实例共享,在多个实例之间对引用类型数据操作会互相影响。
// 创建子类实例时，无法向父类构造函数传参


// 调用一个函数和new一个函数方式一致


function A() {
  console.log('this')
  console.log(this)
  this.hmw = 'aaa'
  if(this instanceof A){
    
  }else{
    return new A()
  }
}
new A()

function A(params) {
  console.log('this')
  console.log(this)
}



