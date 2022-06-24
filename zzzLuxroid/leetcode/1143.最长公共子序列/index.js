https://leetcode.cn/problems/longest-common-subsequence/solution/jsjie-ti-si-lu-qing-xi-ming-liao-by-inte-9qrf/

var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length, len2 = text2.length;
    let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if(text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[len1][len2];
};

console.log(longestCommonSubsequence('abcde', 'ace'))
