/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function erfen(nums, left, right) {
  let pivotIndex = Math.floor((left + right) / 2)
  let pivot = nums[pivotIndex]
  let p1 = left, p2 = right
  while (p1 < p2) {
    while(nums[p1] < pivot){
      p1++
    }
    while(nums[p2] > pivot){
      p2--
    }
    if(p1 < p2){ //交换
      let temp = nums[p1]
      nums[p1] = nums[p2]
      nums[p2] = temp
    }
    if(nums[p1] === nums[p2] && p1 !== p2){
      p1++
    }
  }
  return p1
}

function findK(nums, left, right, k) {
  let index = erfen(nums, left, right, k)
  if (index === k) {
    return nums[index]
  } else if (index < k) {
    return findK(nums, index + 1, right, k)
  } else if (index > k) {
    return findK(nums, left, index - 1, k)
  }
}

var findKthLargest = function (nums, k) {
  return findK(nums, 0, nums.length-1, nums.length - k)
};
// @lc code=end

