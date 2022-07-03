/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let compareBigPivot //对比轴值 区间放大
  let targetArr = []
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  intervals.forEach((arr, index) => {
    if (index === 0) {
      targetArr.push(arr)
    } else {
      let len = targetArr.length
      compareBigPivot = targetArr[len - 1][1]
      if (compareBigPivot >= arr[0]) { //可以合并 放大
        if (compareBigPivot < arr[1]) { //有变大的必要
          targetArr[len - 1][1] = arr[1]
        }
      } else {
        targetArr.push(arr)
      }
    }
  })
  return targetArr
};


console.log(merge([[1, 4], [2, 6]]))

