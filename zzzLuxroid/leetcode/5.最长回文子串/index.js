// 给你一个字符串 s，找到 s 中最长的回文子串。

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 输入：s = "cbbd"
// 输出："bb"

// https://leetcode.cn/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-alexer-660/
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let targetStr = ''
  if (s.length < 2) {
    return s
  }
  for (let i = 0; i < s.length; i++) {
    calc(i, i)
    calc(i, i + 1)
  }
  function calc(i, j) {
    let before = i, after = j
    while (before >= 0 && after <= s.length && s[before] === s[after]) {
      before--
      after++
    }
    console.log('before')
    console.log(before, after)
    if (after - before - 1 > targetStr.length) {
      targetStr = s.slice(before + 1, after)
    }
  }
  return targetStr
}
longestPalindrome("cbbd")

// var longestPalindrome1 = function (s) {
//   if (s.length < 2) {
//     return s
//   }
//   let res = ''
//   for (let i = 0; i < s.length; i++) {
//     // 回文子串长度是奇数
//     helper(i, i)
//     // 回文子串长度是偶数
//     helper(i, i + 1)
//   }

//   function helper(m, n) {
//     while (m >= 0 && n < s.length && s[m] == s[n]) {
//       m--
//       n++
//     }
//     // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
       //  多减了一次 多加了一次 所以距离是 m+1 n - 1 区间
      //  abbc
      // 0 3
      // 1 2
//     // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n - 1的区间  长度是 n-1 - (m-1) + 1 = n-m-1
//     if (n - m - 1 > res.length) {
//       // slice也要取[m+1,n-1]这个区间 
//       res = s.slice(m + 1, n)
//     }
//   }
//   console.log('res')
//   console.log(res)
//   return res
// };
// longestPalindrome1('cbbd')