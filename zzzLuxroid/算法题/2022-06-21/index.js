/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let left = 0, right = 0
  let length = 0
  while(right < s.length){
    if(!set.has(s[right])){
      set.add(s[right])
      length = Math.max(set.size, length)
    } else {
      while(set.has(s[right])){
        set.delete(s[left++])
      }
      set.add(s[right])
    }

    right++
  }
  return length
  console.log('length')
  console.log(length)
};


lengthOfLongestSubstring("aab")