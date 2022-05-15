function a(arr, low, high, target){
  if(arr.length <= 1){
    return -1
  }
  let pivotIndex = Math.floor((low + high) / 2)
  let pivot = arr[pivotIndex]
  if(pivot < target){
    a(arr, pivotIndex + 1, high, target)
  } else if(pivot > target){
    a(arr, low, pivotIndex - 1, target)
  } else {
    console.log('pivotIndex')
    console.log(pivotIndex)
  }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = a(arr, 0, 13, 10);