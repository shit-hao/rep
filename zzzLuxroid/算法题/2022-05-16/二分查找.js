function a(arr, low, high, target){
  let pivotIndex = Math.floor((low + high) / 2)
  let pivot = arr[pivotIndex]
  if(target > pivot){
    a(arr, pivotIndex + 1, high, target)
  } else if(target < pivot){
    a(arr, low, pivotIndex - 1, target)
  } else {
    console.log('pivotIndex')
    console.log(pivotIndex)
  }
}


var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = a(arr, 0, 13, 10);