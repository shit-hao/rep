/**
 * @param {string} s
 * @return {boolean}
 */

//  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

//  说明：本题中，我们将空字符串定义为有效的回文串。

var isPalindrome = function (s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let p1 = 0, p2 = s.length - 1
  let result = true
  while (p1 < p2) {
    if (s[p1] === s[p2]) {
      p1++
      p2--
      continue
    } else {
      result = false
      break
    }
  }
  return result
};