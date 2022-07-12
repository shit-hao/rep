/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if(nums.length < 2){
    return 0
  }
  let pLeft = 1, pRight = nums.length - 1 - 1
  while (nums[pLeft] > nums[pLeft - 1]) {
    pLeft++
  }
  while (nums[pRight] < nums[pRight + 1]) {
    pRight--
  }
  if(nums[pRight] === nums[pLeft] && pRight !== pLeft && pLeft < pRight){
    return 1
  }
  console.log('pLeft,pRight')
  console.log(pLeft - 1, pRight + 1)
  let result = pRight + 1 - (pLeft - 1) + 1
  if (result < 0) {
    return 0
  }
  return pRight + 1 - (pLeft - 1) + 1

};
// console.log(findUnsortedSubarray([1,3,2,2,2]))
console.log(findUnsortedSubarray([1,2,3,3,3]))
// @lc code=end

