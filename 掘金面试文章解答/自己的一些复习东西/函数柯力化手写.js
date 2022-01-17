function add(a,b,c) {
  return a + b + c
}

function currying(fn, ...args) {
  let length = fn.length
  let allArgs = [...args]
  return function (...innerargs) {
    allArgs.push(...innerargs)
    if(allArgs.length < length){
      return currying.call(this, fn, ...allArgs) //接着收集参数
    }else{
      return fn.call(this, ...allArgs)
    }
  }
}

let fn = currying(add)
console.log(fn(1,2)(2))
