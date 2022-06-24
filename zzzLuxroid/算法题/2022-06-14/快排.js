// 快排

function quickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  let pixotIndex = Math.floor(arr.length / 2)
  let pixot = arr.splice(pixotIndex, 1)[0]
  let leftArr = [], rightArr = []
  arr.forEach(item => {
    if(item < pixot){
      leftArr.push(item)
    }else if(item > pixot){
      rightArr.push(item)
    }
  });
  return quickSort(leftArr).concat(pixot, quickSort(rightArr))
}

console.log('quickSort([-1,-3,0,9,8,99,-10,999])')
console.log(quickSort([-1,-3,0,9,8,99,-10,999]))
