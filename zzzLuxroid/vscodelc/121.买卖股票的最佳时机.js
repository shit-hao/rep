/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-wen-ti-by-chen-wei-f-uye0/
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let n = prices.length;
  let dp = Array.from(new Array(n), () => new Array(2));
  dp[0][0] = 0; //第0天不持有
  dp[0][1] = -prices[0]; //第0天持有
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  console.log('dp')
  console.log(dp)
  return dp[n - 1][0];
};
maxProfit([7, 1, 5, 3, 6, 4])
// @lc code=end

