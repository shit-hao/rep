// 快速排序
// function quickSort(arr){
//   if(arr.length <= 1){
//     return arr
//   }
//   let pivotIndex = Math.floor(arr.length / 2)
//   let pivot = arr.splice(pivotIndex, 1)[0]
//   let left = []
//   let right = []
//   arr.forEach((item)=>{
//     if(item > pivot){
//       right.push(item)
//     }else{
//       left.push(item)
//     }
//   })

//   return quickSort(left).concat([pivot], quickSort(right))
// }

// 1
function quickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  let pixotIndex = Math.ceil(arr.length / 2)
  let pixot = arr.splice(pixotIndex, 1)[0]
  let leftArr = []
  let rightArr = []
  arr.forEach(item => {
    if(item > pixot){
      rightArr.push(item)
    } else{
      leftArr.push(item)
    }
  });
  return quickSort(leftArr).concat([pixot], quickSort(rightArr))
}

console.log('quickSort([-1,0,-2,9,8,99,100,88])')
console.log(quickSort([-1,0,-2,9,8,99,100,88]))


