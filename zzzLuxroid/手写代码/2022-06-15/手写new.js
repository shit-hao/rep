// MDN原话
// 1.创建一个空的简单JavaScript对象（即{}）；
// 2.链接该对象（即设置该对象的构造函数）到另一个对象 ；
// 3.将步骤1新创建的对象作为this的上下文 ；
// 4.如果该函数没有返回对象，则返回this。

function myNew(fn, ...args){
  let obj = {}
  obj.__proto__ = fn.prototype

  let result = fn.call(obj, ...args)
  
}

function myNew(fn, ...args){
  let myObj = {}
  myObj.__proto__ = fn.prototype
  let result = fn.call(myObj, ...args)
}

function _create(o){
  let fn = function(){}
  fn.prototype = o
  return new fn()

}