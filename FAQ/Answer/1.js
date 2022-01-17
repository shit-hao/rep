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
// window.onerror = ()=>{
//   console.log('111')
//   console.log(111)
// }
// window.addEventListener('unhandledrejection', function(event) {
//   // 这个事件对象有两个特殊的属性：
//   alert(event.promise); // [object Promise] - 生成该全局 error 的 promise
//   alert(event.reason); // Error: Whoops! - 未处理的 error 对象
// });

function a(){
  c.l()
  console.log('333')
  console.log(333)
}
