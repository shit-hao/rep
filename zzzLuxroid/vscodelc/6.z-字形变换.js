/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= 1) {
    return s
  }
  let arr = new Array(numRows).fill(0).map(() => {
    return []
  })
  let i = 0, j = 0;
  let tempS = s
  while (tempS.length) {
    while (i < arr.length) {
      arr[i][j] = tempS.slice(0, 1)
      tempS = tempS.slice(1, tempS.length)
      i++
    }
    --i
    while(i > 1){
      arr[--i][++j] = tempS.slice(0, 1)
      tempS = tempS.slice(1, tempS.length)
    }
    ++j
    i = 0
  }
  let targetStr = ''
  arr.forEach((subArr)=>{
    subArr.forEach((item)=>{
      targetStr = targetStr + item
    })
  })
  return targetStr
};
// @lc code=end

convert('PAYPALISHIRING', 3)

