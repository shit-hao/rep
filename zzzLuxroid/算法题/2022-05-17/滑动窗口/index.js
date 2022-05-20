// 3. 无重复字符的最长子串 (medium)
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

function a(str){
  let left = 0
  let right = 0
  let set = new Set()
  let len = str.length
  while(right < str.length){
    if(!set.has(a[right])){
      set.add(a[right])
    } else {
      while(set.has(a[right])){
        set.delete(a[left++])
      }
    }
    right++
  }
}