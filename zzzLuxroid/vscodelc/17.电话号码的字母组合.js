/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if(digits.length === 0) return []
  let map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let targetArr = []

  function dfs(curStr, i) {
    if(i >= digits.length){
      targetArr.push(curStr)
      return
    }
    let str = map[digits[i]]
    for (let j = 0; j < str.length; j++) {
      dfs(curStr + str[j], i + 1)
    }
  }
  dfs('', 0)
  return targetArr
};
console.log(letterCombinations("23"))

// @lc code=end

