// 推荐方法

// 滑动窗口的思想
// 初始化 left = right = 0 和结果result
// 寻找可行解：不断扩大right++来扩大窗口。 直到符合题意
// 优化可行解；不断缩小left++来缩小窗口。直到不符合题意为止


// 3. 无重复字符的最长子串 (medium)
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
    let left = 0
    let right = 0
    let set = new Set()
    let length = 0
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right])
            length = Math.max(length, set.size)
        } else { //滑动左边界 并且删除一样的值
            while (set.has(s[right])) {
                set.delete(s[left++])
            }
            set.add(s[right])
        }
        right++
    }
}
lengthOfLongestSubstring('aab')