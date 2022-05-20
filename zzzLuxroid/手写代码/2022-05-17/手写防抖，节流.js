function debounce(fn, wait, immmi){
  let timer = null
  return function (...args){
    let self = this
    if(timer) clearTimeout(timer)
    if(immmi){
      if(!timer) {
        fn.call(self, ...args)
        timer = setTimeout(()=>{
          timer = null
        }, wait)
      } else {
        timer = setTimeout(()=>{
          fn.call(self, ...args)
        }, wait)
      }
    } else {
      setTimeout(()=>{
        fn.call(self, ...args)
      }, wait)
    }
  }
}


function thro(fn, wait){
  let timer = null
  return function(...args){
    let self = this
    if(!timer){
      timer = setTimeout(()=>{
        fn.call(self, ...args)
        timer = null
      })
    }
    
  }
}