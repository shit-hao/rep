/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 2) {
    return []
  }
  let targetArr = []
  nums.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break // 因为已经排过序 基数大于0 剩下不用相加都大于0
    if (i > 0 && nums[i] === nums[i - 1]) continue //已经计算过了
    let left = i + 1, right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        targetArr.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) { left++ }
        while (left < right && nums[right] === nums[right - 1]) { right-- }
        left++
        right--
      } else if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      }
    }
  }
  return targetArr
};
// @lc code=end

