// 快排
let result = []
let quickSort = function(arr){
  if(arr.length <= 1){
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  arr.forEach((item)=>{
    if(item > pivot){
      right.push(item)
    }else {
      left.push(item)
    }
  })
  return quickSort(left).concat([pivot], quickSort(right))
}
quickSort([1,3,2,-1,0,9,99])