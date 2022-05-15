Function.prototype.myNew = function(constr, ...args){
  let obj = {}
  obj.__proto__ = constr.prototype
  let result = constr.call(obj, ...args)
   return Object.prototype.toString.call(result) === '[object Object]' ? result : obj
}