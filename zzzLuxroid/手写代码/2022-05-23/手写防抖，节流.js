// 防抖 一段时间后执行一次

function debounce(fn ,wait, immi){
  let timer = null
  return function(...args){
    let self = this
    if(timer) clearTimeout(timer)
    if(immi){
      if(!timer){
        fn.call(self, ...args)
        timer = setTimeout(()=>{
          timer = null
        }, wait)
      }else{
        timer = setTimeout(()=>{
          fn.call(self, ...args)
        }, wait)
      }
    }else{
      timer = setTimeout(()=>{
        fn.call(self, ...args)
      }, wait)
    }
  }
}

// 节流 一段时间只执行一次
function thro(fn, wait){
  let timer = null
  return function(...args){
    let self = this
    if(!timer){
      setTimeout(()=>{
        fn.call(self, ...args)
      }, wait)
    }
  }
}