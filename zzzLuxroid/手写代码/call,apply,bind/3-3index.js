Object.prototype.toString.call([])
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

Function.prototype.myBind = function(fn, ...args){
  let self = this
  return function(...innerArgs){
    self.apply(fn, args.concat(innerArgs))
  }
}


// 函数柯力化

function curry(fn, ...args){
  let len = fn.length
  let self = this
  return function(...innerArgs){
    if(args.length + innerArgs.length < len){
      return curry(fn, args.concat(innerArgs))
    }else{
      fn.apply(self, args.concat(innerArgs))
    }
  }
}
