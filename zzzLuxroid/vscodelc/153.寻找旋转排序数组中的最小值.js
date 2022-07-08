/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(!nums.length) return null
  if(nums.length === 1) return nums[0]
  let left = 0, right = nums.length - 1
  if(nums[left] < nums[right]) return nums[left]
  while(left < right){
    let pivotIndex = Math.floor((left + right) / 2)
    if(nums[pivotIndex] > nums[pivotIndex + 1]){ //最小get
      return nums[pivotIndex + 1]
    }
    if(nums[pivotIndex] < nums[pivotIndex - 1]){
      return nums[pivotIndex] //最小get
    }
    if(nums[pivotIndex] > nums[left]){ //在右边
      left = pivotIndex + 1
      continue
    }
    if(nums[pivotIndex] < nums[right]){ //在左边
      right = pivotIndex - 1
      continue
    }
  }
  return null

};
// @lc code=end

