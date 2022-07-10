/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1)
  let result = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(result, dp[i])
  }
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
// @lc code=end

