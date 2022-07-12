
// 延时一段时间执行

function fd(fn, wait, immi) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    if (immi) {
      if (!timer) fn(...args)
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn(...args)
      }, wait)
    }
  }
}

// 一段时间内只执行一次
function jl(fn, wait) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, wait)
    }
  }
}

function myCall(context, ...args) {
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}

function myApply(context, arg) {
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](args)
  delete context[fn]
  return result
}

function myBind(context, ...arg) {
  let fn = this
  return function () {
    // context.call(self, ...args)
    fn.call(context, ...args)
  }
}