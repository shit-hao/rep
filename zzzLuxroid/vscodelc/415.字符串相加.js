/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let rest = 0, sum = []
  let p1 = num1.length - 1, p2 = num2.length - 1
  let index = 0
  while (p1 >= 0 || p2 >= 0 || rest > 0) {
    let partSum = (num1[p1] ? Number(num1[p1]) : 0) + (num2[p2] ? Number(num2[p2]) : 0) + rest
    rest = 0
    if (partSum >= 10) {
      rest = 1
      partSum = partSum % 10
    }
    sum.unshift(partSum)
    p1--
    p2--
    index++
  }
  return sum.join('')
};
// @lc code=end

