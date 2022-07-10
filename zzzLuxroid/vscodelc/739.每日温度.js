/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 单调栈
var dailyTemperatures = function (temperatures) {
  let stack = []
  // debugger
  let arr = new Array(temperatures.length).fill(0)
  temperatures.forEach((item, index) => {
    while(stack.length && item > temperatures[stack[stack.length - 1]]){
      let lastIndex = stack.pop()
      arr[lastIndex] = index - lastIndex
    }
    stack.push(index)
  })
  return arr
};
// dailyTemperatures([73,74,75,71,69,72,76,73])
// @lc code=end

