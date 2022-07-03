/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 回文数有两种 偶数回文，奇数回文
var isPalindrome = function(x) {
  x = x.toString()
  let p1 = 0, p2 = x.length -1
  while(p1 < p2){
    if(x[p1] === x[p2]){
      p1++; p2--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

