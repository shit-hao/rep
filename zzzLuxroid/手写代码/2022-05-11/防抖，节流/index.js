//  防抖 一段时间后执行一次 返回一个已防抖的函数

function debounce(fn, wait, immediate) {
  let timer = null
  let debounced = function (...args) {
    let self = this
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      if(!timer) fn.call(self, ...args)
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.call(self, ...args)
      }, wait)
    }
  }
  debounced.cancel = function(){
    clearTimeout(timer)
    timer = null
  }

  return debounced
}

// 节流 一段时间内只执行一次 返回一个已节流的函数

function throttle(fn, wait){
  let timer = null
  return function(...args){
    let self = this
    setTimeout(()=>{
      fn.call(self, ...args)
      timer = null
    },wait)
  }
}