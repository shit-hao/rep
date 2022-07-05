/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  let p = 0
  let index = 0
  function calc(left, right){ //计算数量
      if(left < 0 || right > s.length){
          return 
      }
      if(s[left] === s[right]){ 
          index += 1
          calc(left - 1, right + 1) //继续去算
      }else{
          return 
      }  
  }

  while (p < s.length){
      calc(p, p + 1)//求偶数
      calc(p, p)//求偶数
      p++ 
  }
  return index
};
countSubstrings('fdsklf')
// @lc code=end

