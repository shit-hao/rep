/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let p = 0
  let targetStr = ''
  function calc(left, right) {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      left--
      right++
    }
    if (s.slice(left + 1, right).length > targetStr.length) {
      targetStr = s.slice(left + 1, right)
    }
  }
  while (p < s.length) {
    calc(p, p) //算奇数
    calc(p, p + 1) //算偶数
    p++
  }
  console.log('targetStr')
  console.log(targetStr)
  return targetStr
};
longestPalindrome('babad')
// @lc code=end

