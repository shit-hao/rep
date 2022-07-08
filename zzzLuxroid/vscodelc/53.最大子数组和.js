/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let sum = 0
  nums.forEach((item) => {
    if (sum > 0) {
      sum = sum + item
    } else {
      sum = item
    }
    maxSum = Math.max(sum, maxSum)
  })
  return maxSum
};
// @lc code=end

