/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let result = []
  let path = []
  debugger
  function backtracking(startIndex) {
      result.push(path.slice())
      for(let i = startIndex; i < nums.length; i++) {
          path.push(nums[i])
          backtracking(i + 1)
          path.pop()
      }
  }
  backtracking(0)
  return result
};
subsets([1,2,3])
// @lc code=end

