// 快排

function quickSort(arr) {
  if(arr.length <= 1){
    return arr
  }
  let pivotIndex =  Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let leftArr = []
  let rightArr = []
  arr.forEach(item => {
    if(pivot < item){
      rightArr.push(item)
    }else{
      leftArr.push(item)
    }
  })
  return quickSort(leftArr).concat([pivot]).concat(rightArr)
}

quickSort([1,2,3,-1,0.1])
// 函数柯力化

function curry(fn, ...args) {
  let length = fn.length
  // 收集参数
  return function (...arg) {
    let self = this
    let allArgs = [...args].concat([...arg])
    if(allArgs.length < length){
      return curry.call(self, fn, ...allArgs)
    }else{
      return fn.call(self, ...allArgs)
    }
  }
}

let add = (a, b, c) =>{
  console.log('1',a,b,c)
  return a + b + c
}

console.log(curry(add)(1)(2)(3))
