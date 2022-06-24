function findKthLargest(nums, k){
  return quickSelect(nums, 0, nums.length - 1, nums.length - k)
}

function quickSelect(arr, left, right, k){
  let index
  if (left < right) {
    index = fz(arr, left, right)
    if(index === k){
      return arr[index]
    } else if(k < index) {
      return quickSelect(arr, left, index - 1, k)
      // return quickSelect(arr, left, index - 1, k)
    } else {
      return quickSelect(arr, index + 1, right, k)
    }
  } else {
    return arr[left]
  }
}

// 快速排序
function fz(arr, left, right){
  let pixot = arr[Math.floor((left + right) / 2)]
  let p1 = left, p2 = right
  while(p1 < p2){
    while(arr[p1] < pixot){
      p1++
    }
    while(arr[p2] > pixot){
      p2--
    }
    if(p1 < p2){
      let temp = arr[p1]
      arr[p1] = arr[p2]
      arr[p2] = temp
    }
  }
  return p1
}

console.log(findKthLargest([4,5,1,6,2,7,3,8], 3))