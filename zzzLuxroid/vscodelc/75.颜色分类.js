/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 原地快排
var sortColors = function (nums) {
  debugger
  let temp
  let sort = function (nums, left, right) {
    if(left >= right){
      return
    }
    let pivot = nums[left]
    let p1 = left, p2 = right
    while (p1 < p2) {
      while (nums[p1] < pivot) {
        p1++
      }
      while (nums[p2] > pivot) {
        p2--
      }
      if (p1 < p2) {//swap
        temp = nums[p1]
        nums[p1] = nums[p2]
        nums[p2] = temp
      }
      if(nums[p1] === nums[p2] && p1 !== p2){
        p1++
      }
    }
    sort(nums, left, p2 - 1)
    sort(nums, p1 + 1, right)
  }
  sort(nums, 0, nums.length - 1)
  return nums
};
// sortColors([2,0,1])
// @lc code=end

