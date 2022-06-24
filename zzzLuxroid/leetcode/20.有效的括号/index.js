// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */

let map = {
  '{': '}',
  '(': ')',
  '[': ']'
}

var isValid = function (str) {
  let arr = []
  Array.from(str).forEach(item => {
    if(map[item]){ //左括号
      arr.push(item)
    } else { //遇到右括号
      if(map[arr.pop()] === item){
        // console.log('dui')
      }else{
        // console.log('no')
      }
    }
  });
  if(arr.length === 0){
    return 'true'
  } else {
    return 'false'
  }
};

isValid('()[]{}')

