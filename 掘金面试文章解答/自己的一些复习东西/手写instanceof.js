// // instanceof
// // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

// function myiof(obj, fn){
//   // let prototype =
//   let left = obj.__proto__, right = fn.prototype
//   while(true){
//     if(left === null){
//       return false
//     }
//     if( left === right ){
//       return true
//     }
//     left = left.__proto__
//   }
// }

function myiof(obj, fn) {
  let left = obj.__proto__
  let right = fn.prototype
  while(true){
    if(left === null){
      break
    }
    if(left === right){
      return true
    }
    left = left.__proto__
  }
}


let i = 0
while(true){
  console.log('i')
  console.log(i)
  if(i === 10){
    console.log('10-')
    break
    // return
  }
  i++
}