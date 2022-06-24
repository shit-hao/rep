// 1.使用冒泡排序 ，局部排序

// 2.解法：优化，快速选择（quickselect）算法

let findKthLargest = function (nums, k) {
  return quickSelect(nums, nums.length - k)
};

let quickSelect = (arr, k) => {
  return quick(arr, 0, arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
  let index
  if (left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if (k === index) {
      return arr[index]
    } else if (k < index) {
      // Top k 在左边
      return quick(arr, left, index - 1, k)
    } else {
      // Top k 在右边
      return quick(arr, index + 1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr, left, right) => {
  // 取中间项为基准
  var pixot = arr[Math.floor(Math.random() * (right - left + 1)) + left],
    i = left,
    j = right
  // 开始调整
  while (i < j) {

    // 左指针右移
    while (arr[i] < pixot) {
      i++
    }

    // 右指针左移
    while (arr[j] > pixot) {
      j--
    }

    // 交换
    if (i < j) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为pixot，但位置不同
    // 继续递增i，防止死循环
    if (arr[i] === arr[j] && i !== j) {
      i++
    }
  }
  return i
}

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


console.log(findKthLargest([4,5,1,6,2,7,3,8], 1))