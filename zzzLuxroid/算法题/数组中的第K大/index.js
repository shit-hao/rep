
let findKthLargest = function (nums, k) {
  return quick(nums, 0, nums.length - 1, nums.length - k)
};
let quick = (arr, left, right, k) => {
  let index
  if (left < right) {
    index = partition(arr, left, right)
    if (k === index) {
      return arr[index]
    } else if (k < index) {
      return quick(arr, left, index - 1, k)
    } else {
      return quick(arr, index + 1, right, k)
    }
  }
  return arr[left]
}
let partition = (arr, left, right) => {
  var pixot = arr[Math.floor(Math.random() * (right - left + 1)) + left]
  let i = left
  let j = right
  while (i < j) {
    while (arr[i] < pixot) {
      i++
    }
    while (arr[j] > pixot) {
      j--
    }
    if (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    // 当数组中存在重复数据时，即都为pixot，但位置不同
    // 继续递增i，防止死循环
    if (arr[i] === arr[j] && i !== j) {
      i++
    }
  }
  return i
}
console.log(findKthLargest([1], 1))