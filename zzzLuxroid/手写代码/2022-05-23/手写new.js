function myNew(fn){
  let obj = {}
  obj.__proto__ = fn.prototype
  let result = fn.call(obj)
  return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}