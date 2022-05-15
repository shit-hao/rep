function quickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let leftArr = []
  let rightArr = []
  arr.forEach((item) => {
    if(item > pivot){
      rightArr.push(item)
    } else {
      leftArr.push(item)
    }
  })
  return quickSort(leftArr).concat([pivot],  quickSort(rightArr))
}

console.log('quickSort([1,3,2,-1,0,9,99])')
console.log(quickSort([1,3,2,-1,0,9,99])) 