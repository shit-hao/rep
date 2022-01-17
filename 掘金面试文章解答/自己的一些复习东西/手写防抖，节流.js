// 防抖 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。否则重新计时

function debounce(fn, wait, immd) {
  let timer = null
  return function (...args) {
    let self = this
    if (timer) clearTimeout(timer)
    if (immd) { //立即执行  
      if (!timer) fn.call(self, ...args)
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.call(self, ...args)
      }, wait)
    }
  }
}



// 节流 指定时间间隔内只会执行一次任务。


function thro(fn, wait){
  let timer = null
  return function(...args){
    let self = this
    if(!timer){
      timer = setTimeout(()=>{
        fn.call(self, ...args)
        timer = null
      },wait)
    }
  }
}

//节流
function debounce(fn,wait, immde) {
  let timer = null
  return function (...args) {
    let self = this
    if(timer){
      clearTimeout(timer)
    }
    if(immde){ //立即执行
      if(!timer){
        fn.call(self,...args)
      }
      timer = setTimeout(()=>{
        timer = null
      }, wait)
    }else{
      timer = setTimeout(()=>{
        fn.call(self,...args)
      }, wait)
    }
  }
}

//防抖

function thro(fn, wait) {
  let timer = null
  return function (...args) {
    let self = this
    if(!timer){
      setTimeout(()=>{
        fn.call(self,...args)
        timer = null
      }, wait)
    }
  }
}



