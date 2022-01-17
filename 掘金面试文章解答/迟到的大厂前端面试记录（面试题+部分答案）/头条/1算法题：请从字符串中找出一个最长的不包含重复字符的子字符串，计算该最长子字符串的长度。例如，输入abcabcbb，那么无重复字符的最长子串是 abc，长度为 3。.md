算法题：请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。例如，输入abcabcbb，那么无重复字符的最长子串是 abc，长度为 3。

function calc(str){
  let sMap = new Map()
  let length = 0
  Array.from(str).forEach((item, index)=>{
    if(!sMap[item]){
      sMap.set(item,true)
      length ++
    }else{
      if(sMap.size > length){
        length = sMap.size
        sMap = new Map()
      }
    }
  })
  console.log(length)
}