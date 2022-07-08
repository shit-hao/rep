/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0, right = nums.length - 1
  if (!nums.length) return -1
  while (left <= right) {
    let pivotIndex = Math.floor((left + right) / 2)
    let pivot = nums[pivotIndex]
    if(pivot === target){
      return pivotIndex
    }
    if (pivot >= nums[left]) {
      if (target >= nums[left] && target < pivot) {//pivotIndex左边
        right = pivotIndex - 1
      } else { //pivotIndex右边
        left = pivotIndex + 1
      }
    } else {
      if (target <= nums[right] && pivot < target) {//pivotIndex右边
        left = pivotIndex + 1
      } else { //pivotIndex右边
        right = pivotIndex - 1
      }
    }
  }
  return -1
}
search([4,5,6,7,0,1,2], 0)
// @lc code=end

