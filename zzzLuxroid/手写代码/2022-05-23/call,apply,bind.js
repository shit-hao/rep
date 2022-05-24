function myCall(context, ...args){
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}

function myApply(context, arg){
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](arg)
  delete context[fn]
  return result
}

function myBind(context, ...arg){
  let self = this
  return function(...innerArgs){
    context.apply(self, arg.concat(innerArgs))
  }
}