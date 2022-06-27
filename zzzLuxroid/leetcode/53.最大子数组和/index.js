// https://leetcode.cn/problems/maximum-subarray/
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]
  let sum = 0
  nums.forEach((item) => {
    if(sum > 0){
      sum = sum + item
    } else {
      sum = item
    }
    maxSum = Math.max(maxSum, sum);
  })
  return maxSum
  console.log('maxSum')
  console.log(maxSum)
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])