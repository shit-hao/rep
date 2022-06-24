// 收集参数的过程
function curry(fn, ...args){
  let length = fn.length
  return function(...innerArgs){
    let self = this
    let allArgs = args.concat(innerArgs)
    if(allArgs.length < length){
      // 继续收集
      return curry(fn, ...allArgs)
    } else {
      // 执行
      return fn.call(self, ...allArgs)
    }
  }
  
}

function add(a,b,c) {
  return a + b + c
}
let fn = curry(add)
console.log(fn(1,2)(2))
