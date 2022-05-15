function curry(fn, ...args){
  // 收集参数的过程
  let length = fn.length
  return function(...innerArgs){
    let self = this
    if(args.concat(innerArgs).length < length){
      // 接着收集
      // return curry(fn, ...args.concat(innerArgs)) this指向问题
      return curry.call(self, fn, ...args.concat(innerArgs))
    } else {
      return fn.call(self, ...args.concat(innerArgs))
    }
  }
}