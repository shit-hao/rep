
function quickSort(arr) {
  //取中值
  if(arr.length <= 1){
    return arr
  }
  // let pivot = arr[Math.floor(arr.length / 2)] // 基准值
  var pivotIndex = Math.floor(arr.length / 2); //返回小于等于x的最大整数:
  var pivot = arr.splice(pivotIndex, 1)[0];
  // var pivot = arr[pivotIndex];

  let leftArr = [], rightArr = []
  arr.forEach(item => {
    if (item < pivot) {
      leftArr.push(item)
    } else {
      rightArr.push(item)
    }
  })
  return quickSort(leftArr).concat([pivot], quickSort(rightArr))
}
console.log (quickSort([1,3,5,2,34,6,8,4]))