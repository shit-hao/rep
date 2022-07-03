/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0
  let p = 0, p1 = 0
  let set = new Set()
  while(p < s.length){
    if(!set.has(s[p])){
      set.add(s[p++])
      maxLen = Math.max(maxLen, set.size)
    } else {
      while(set.has(s[p])){
        set.delete(s[p1++])
      }
      set.add(s[p++])
    }
  }
  return maxLen
};
// @lc code=end

