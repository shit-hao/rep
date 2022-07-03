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

// toString 覆盖版本
function add () {
  let args = [...arguments]
  let inner = function () {
    args.push(...arguments)
    return inner
  }
  inner.toString = () => {
    return args.reduce((pre, cur) => {
      return pre + cur
    })
  }
  return inner
}

const res = add(1)(2)(3)(4)(5)
console.log(res);        // true
console.log(res.toString());   // 15



