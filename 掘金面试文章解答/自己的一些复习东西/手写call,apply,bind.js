function myCall(context,...args){
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}

function myApply(context, arg){
  context.fn = this
  let result = context.fn(args)
  delete context.fn
  return result
}


function myBind(context, ...args){
  let self = this

  return function(...innerArgs){
    return self.apply(context, [...args].concat([...innerArgs]))
  }
}

Function.prototype.myBind = function (context, ...args) {
  let self = this

  return function(...innerArgs){
    return self.apply(context, [...args].concat([...innerArgs]))
  }
}
