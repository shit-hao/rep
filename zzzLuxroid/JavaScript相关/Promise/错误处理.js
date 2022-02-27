new Promise((res, rej)=>{
  // res()
  a.b()
  // rej(33)
  console.log('1234')
  console.log(1234)
}).then((res)=>{
  console.log('res')
  console.log(res)
})
.catch((rej)=>{
  console.log('rej')
  console.log(rej)
})
.then((res)=>{
  console.log('ww')
})

// console不执行 因为发生语法错误，脚本中断错误信息给到catch 此时状态仍是fulfilled 因为有catch进行处理，
// 并且catch后的then也会执行，Promise认为你已经正确的处理的error，如果不是预知的error，可以手动Throw
new Promise((res, rej)=>{
  // res()
  // a.b()
  rej(33)
  console.log('1234')
  console.log(1234)
}).then((res)=>{
  console.log('res')
  console.log(res)
})
.catch((rej)=>{
  console.log('rej')
  console.log(rej)
})
.then((res)=>{
  console.log('ww')
})
//console会执行，没有发生语法错误其余都会上面那个情况一致

// 未被catch的error可以使用unhandledrejection捕捉
