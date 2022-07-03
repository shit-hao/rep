/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  x = Array.from(x.toString())
  let symbol = ''
  if (x.slice(0, 1)[0] === '-' || x.slice(0, 1)[0] === '+') {
    symbol = x.slice(0, 1)[0]
    x = x.slice(1, x.length)
  }
  let p1 = 0, p2 = x.length -1, temp
  while(p1 < p2){ //交换
    temp = x[p1]
    x[p1] = x[p2]
    x[p2] = temp
    p1++; p2--
  }
  let num = Number(symbol + x.join(''))
  if(num > (Math.pow(2, 31) - 1) || num < Math.pow(-2, 31)){
    return 0
  }
  return Number(symbol + x.join(''))
};
console.log(reverse(1534236469))
// @lc code=end

