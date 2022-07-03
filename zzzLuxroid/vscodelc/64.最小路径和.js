/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
var minPathSum = function (grid) {
  let arr = new Array(grid.length).fill(0).map((item)=>{
    return new Array(grid[0].length).fill(0)
  })

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    for (let j = 0; j < item.length; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = grid[i][j]
        continue
      }
      if (i === 0) {
        arr[i][j] = grid[i][j] + arr[i][j-1]
        continue
      }
      if (j === 0) {
        arr[i][j] = grid[i][j] + arr[i - 1][j]
        continue
      }
      arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j]
    }
  }
  return arr[grid.length - 1][grid[0].length - 1]
};
minPathSum([[1,3,1],[1,5,1],[4,2,1]])
// @lc code=end

// 1 3 1
// 1 5 1
// 4 2 1

// 1 4 5
// 2 7 6
// 6 8 7


