// 老生常谈了写过起码100遍了
// call,apply,bind
String.prototype.toString.call('1234')

Function.prototype.myCall = function(context, ...args){
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}

Function.prototype.myApply = function(context, arg){
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](arg)
  delete context[fn]
  return result
}

Function.prototype.myBind = function(context, ...outerArgs){
  // 保留this
  let self = this
  return function(...innerArgs){
    self.apply(context, outerArgs.concat(innerArgs))
  }
}