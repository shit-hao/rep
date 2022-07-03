/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function merge(nums1, nums2) {
  let p1 = 0, p2 = 0
  let targetNums = []
  while (p1 < nums1.length || p2 < nums2.length) {
    if (p2 === nums2.length) {
      targetNums.push(nums1[p1++])
    } else if (p1 === nums1.length) {
      targetNums.push(nums2[p2++])
    } else if (nums1[p1] <= nums2[p2]) {
      targetNums.push(nums1[p1++])
    } else if (nums1[p1] > nums2[p2]) {
      targetNums.push(nums2[p2++])
    }
  }
  return targetNums
}

var findMedianSortedArrays = function (nums1, nums2) {
  let targetNums = merge(nums1, nums2)
  let mid
  if (targetNums.length % 2 === 0) { //偶数长度
    mid = (targetNums[(targetNums.length / 2) - 1] + targetNums[(targetNums.length / 2)]) / 2
  } else { //奇数长度
    mid = targetNums[Math.floor(targetNums.length / 2)]
  }
  return mid

};
// @lc code=end

