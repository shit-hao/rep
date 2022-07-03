/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let targetArr = []
  const dfs = function(leftR, rightR, str){
    if(str.length === 2 * n){
      targetArr.push(str)
      return
    }
    if(leftR > 0){
      dfs(leftR - 1, rightR , str + '(' )
    }
    if(leftR < rightR){
      dfs(leftR, rightR - 1 , str + ')')
    }
  }

  dfs(n, n, '')
  return targetArr
};
// @lc code=end

