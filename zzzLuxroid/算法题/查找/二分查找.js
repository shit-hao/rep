function find(arr, low, high, target){
  if(arr.length <= 1){
    return 
  }
  let pivotIndex = Math.floor((low + high) / 2)
  // let 
  if(arr[pivotIndex] > target){
    find(arr, low, pivotIndex - 1, target)
  }else if(arr[pivotIndex] < target){
    find(arr, pivotIndex + 1, high, target)
  }else{
    console.log('find pivotIndex')
    console.log(pivotIndex)
  }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = find(arr, 0, 13, 10);