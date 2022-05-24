// 手机参数的过程
function curry(fn, ...args){
  let len = fn.length
  return function(...innerArgs){
    let self = this
    if(args.length + innerArgs.length < len){
      // 继续收集
      // return curry(fn,args.concat(innerArgs))
      return curry.apply(this, fn ,args.concat(innerArgs))
    } else {
      // 收集完成
      return fn.apply(self,args.concat(innerArgs))
    }

  }
}