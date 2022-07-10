// function mergeSort(arr) { //采用自上而下的递归方法
//   var len = arr.length;
//   if (len < 2) {
//     return arr;
//   }
//   var middle = Math.floor(len / 2),
//     left = arr.slice(0, middle),
//     right = arr.slice(middle);
//   return merge(mergeSort(left), mergeSort(right));
// }
// function merge(left, right) {
//   var result = [];
//   console.time('归并排序耗时');
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   while (left.length) {
//     result.push(left.shift());
//   }
//   while (right.length) {
//     result.push(right.shift());
//   }
//   console.timeEnd('归并排序耗时');
//   return result;
// }



function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }
  let leftArr = [], rightArr = [];
  let pivot = Math.floor(arr.length / 2)
  leftArr = arr.slice(0, pivot)
  rightArr = arr.slice(pivot)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right){
  let targetArr = []
  while(left.length && right.length){
    if(left[0] < right[0]){
      targetArr.push(left.shift())
    } else {
      targetArr.push(right.shift())
    }
  }
  if(left.length){
    targetArr.push(...left)
  }
  if(right.length){
    targetArr.push(...right)
  }
  return targetArr
}


// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr = [2,0,1]
console.log(mergeSort(arr));



