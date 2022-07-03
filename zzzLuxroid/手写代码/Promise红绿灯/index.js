// 利用 Promise 实现一个元素先红色两秒在黄色一秒再绿色三秒，

function red(params) {
  console.log('红色开始')
  new Promise(()=>{
    yellow()
  },2000)
}

function yellow(params) {
  console.log('黄色开始')
  new Promise(()=>{
    setTimeout
    green()
  },1000)
}
function green(params) {
  console.log('绿色开始')
  new Promise(()=>{
    // red()
  },3000)
}

red()