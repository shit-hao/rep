// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/unique-paths
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 可以反着思考 有点像斐波那契数列 一定要往右走m，往下走n
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  let dp = [];
  for (let i = 0; i < m; i++) { dp.push([]) };
  dp[0][0] = 1;

  // 遍历每一个格子，如果越界，那就为0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      let top = i === 0 ? 0 : dp[i - 1][j],
        left = j === 0 ? 0 : dp[i][j - 1];
      dp[i][j] = top + left;
    }
  }
  console.log('dp')
  console.log(dp)
  return dp[m - 2][n - 1] + dp[m - 1][n - 2];
};
function a(m, n){
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  let arr = []
  for (let i = 0; i < m; i++) { arr.push([]) };
  arr[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(i === 0 && j === 0) continue;
      arr[i][j] = (i === 0 ? 0 : arr[i-1][j]) + (j === 0 ? 0 : arr[i][j-1])
    }
  }
  console.log('arr')
  console.log(arr)
}

console.log(a(3, 7))
// 牛逼
