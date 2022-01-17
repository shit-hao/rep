function Person() {

}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin

Function.prototype.myNew = function (obj, ...args) {
  let newObj = {}
  newObj.__proro__ = obj.prototype
  let result = newObj.call(obj, ...args)
  if(Object.prototype.toString.call(result) ==='[object Object]' ){
    return result
  }else{
    return newObj
  }
}

// 寄生组合继承

function link(parent, child) {
  let agentObj = Object.create(parent.prototype)
  agentObj.constructor = child
  child.prototype = agentObj
}

// Person就是一个构造函数用new实例化一个对象person