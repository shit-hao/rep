Function.prototype.myNew = function(fn, ...args){
  let obj = {}
  obj.__proto__ === fn.prototype
  let result = fn.call(obj, ...args)
  return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}