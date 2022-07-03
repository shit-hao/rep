/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let p1 = 0, p2 = height.length - 1
  let bottom = height.length - 1
  let maxmj = 0
  while(p1 < p2){
    maxmj = Math.max(Math.min(height[p1], height[p2]) * bottom, maxmj)
    if(height[p1] <= height[p2]){
      p1++
    }else{
      p2--
    }
    bottom--
  }
  return maxmj
};
// @lc code=end

