/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let p = 0;
  nums.forEach((item, index) => {
    if (item !== 0) {
      let temp = nums[index]
      nums[index] = nums[p]
      nums[p] = temp
      p++
      console.log('nums')
      console.log(nums)
    }
  })
  return nums
};
moveZeroes([1,2,3,0,4,5,6])
// @lc code=end

