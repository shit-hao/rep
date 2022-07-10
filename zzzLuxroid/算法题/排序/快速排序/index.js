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
// function quickSort(arr){
//   if(arr.length <= 1){
//     return arr
//   }
//   let pixotIndex = Math.ceil(arr.length / 2)
//   let pixot = arr.splice(pixotIndex, 1)[0]
//   let leftArr = []
//   let rightArr = []
//   arr.forEach(item => {
//     if(item > pixot){
//       rightArr.push(item)
//     } else{
//       leftArr.push(item)
//     }
//   });
//   return quickSort(leftArr).concat([pixot], quickSort(rightArr))
// }

// console.log('quickSort([-1,0,-2,9,8,99,100,88])')
// console.log(quickSort([-1,0,-2,9,8,99,100,88]))


// 原地 快速排序(递归)

function quick(nums, left = 0, right = nums.length - 1) {
  let temp
  let p1 = left, p2 = right
  if (left > right) {
    return
  }
  let pivot = nums[left]

  while (p1 < p2) {
    while (nums[p1] < pivot) {
      p1++
    }
    while (nums[p2] > pivot) {
      p2--
    }
    if (p1 < p2) {
      temp = nums[p1]
      nums[p1] = nums[p2]
      nums[p2] = temp
    }
    if (nums[p1] === nums[p2] && p1 !== p2) {
      p1++
    }
  }
  quick(nums, left, p1 -1)
  quick(nums, p2 + 1, right)
}

let a = [2,0,1]
console.log(quick(a))
console.log('a')
console.log(a)




