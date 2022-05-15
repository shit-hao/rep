// 二分查找
function search(arr, low, high, target) {
  if(arr.length <= 1){
    return -1
  }
  let pivotIndex = Math.floor((low + high) / 2)
  let pivot = arr[pivotIndex]
  if(target < pivot){
    return search(arr, low, pivotIndex - 1, target)
  } else if(target > pivot){
    return search(arr, pivotIndex + 1, high, target)
  } else {
    // console.log('pivotIndex')
    // console.log(pivotIndex)
    return pivotIndex
  }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = search(arr, 0, 13, 10);
console.log('result')
console.log(result)