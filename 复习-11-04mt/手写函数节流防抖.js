// // 节流  一段时间内只执行一次
// // 非立即执行 ，立即执行
// function throttle(fn, wait, immed) {
//   let timer = null
//   return function (...args) {
//     let self = this
//     if(!timer){
//       if(!immed){
//         setTimeout(()=>{
//           fn.call(self, ...args)
//           timer = null
//         }, wait)
//       } else { //立即执行节流
//         fn.call(self, ...args)
//         setTimeout(()=>{
//           timer = null
//         }, wait)
//       }
      
//     }
//   }
// }
// // 防抖 一段时间内调用多次但是只会在超出时间间隔内才会执行
// function debounce(fn,wait, immed) {
//   let timer = null
//   return function (...args) {
//     let self = this
//     if(timer) clearTimeout(timer)
//     if(immed){ //立即执行
//       if(!timer) fn.call(self, ...args)
      
//       timer = setTimeout(()=>{
//         timer = null
//       }, wait)
//     } else{
//       timer = setTimeout(()=>{
//         fn.call(self, ...args)
//       }, wait)
//     }
//   }
// }


// window.requestAnimationFrame(()=>{
//   console.log('1234')
//   console.log(1234)
// })

// var a = 10;
// function foo () {
//   console.log('window')
//   console.log(this)
//   console.log(this.a)
// }
// foo();
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

// const isValid = function (str = '') {
//   const obj = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };
//   const arr = str.split('');
//   if (arr.length % 2 !== 0) return false;
 
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const code = arr[i];
//     if (obj[code]) {
//       result.push(code);
//     } else if (obj[result.slice(-1)[0]] === code) {
//       result.pop();
//     } else {
//       return false;
//     }
//   }
//   return result.length;
// };
// isValid('([]))')


function test(str) {
  let mapResult = []
  let count = 0
  let obj = {
    '(':')'
  }
  str.split('').forEach(item => {
    if(obj[item]){
      mapResult.push(item)
    } else { //右边括号
      if(mapResult.length > 0){
        mapResult.pop()
        count = count +2
      }
    }
  });
  console.log('count')
  console.log(count)
}

test('(()') //2





