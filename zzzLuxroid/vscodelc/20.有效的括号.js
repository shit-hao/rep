/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) {
    return false
  }
  let map = {
    '{': '}',
    '(': ')',
    "[": ']'
  }
  let p = 0
  let arr = []
  while (p < s.length) {
    if (map[s[p]]) {
      arr.push(s[p])
    } else {
      if (s[p] !== map[(arr.pop())]) {
        return false
      }
    }
    p++
  }
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
};
// @lc code=end

