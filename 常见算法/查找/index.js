// 二分查找的前提为：数组、有序。
// 逻辑为：优先和数组的中间元素比较，如果等于中间元素，则直接返回。如果不等于则取半继续查找。

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

function binarySearch(arr, target, low, high) {
  // 和数组中间的元素比较 奇数? 偶数 不比纠结取中间数 向下取整 向上都行 只是需要某个比较"中间"的值 不能操作数组 
  // 操作数组后 index会发生变化
  let mid = Math.floor((low + high) / 2)
  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] > target) {
    high = mid - 1
    return binarySearch(arr, target, low, high)
  } else if (arr[mid] < target) {
    low = mid + 1
    return binarySearch(arr, target, low, high)
  }
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = binarySearch(arr, 1, 0, arr.length);

//done

