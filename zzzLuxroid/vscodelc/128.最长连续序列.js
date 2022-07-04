/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums)
  let maxLen = 0
  let p = 0
  while(p < nums.length){
    let len = 1
    let left = nums[p] - 1, right = nums[p] + 1
    while(set.has(left)){ //有左边
      len++
      set.delete(left)
      left--
      
    }

    while(set.has(right)){ //有右边
      len++
      set.delete(right)
      right++
    }
    maxLen = Math.max(len, maxLen)
    p++
  }
  return maxLen
};
// @lc code=end

