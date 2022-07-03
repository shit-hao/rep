var levelOrder = function (root) {
  if(!root){
    return []
  }
  let queue = [root]
  let targetArr = []
  while (queue.length > 0) {
    let subArr = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node) {
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
        subArr.push(node.val)
      } else {
        continue
      }

    }
    targetArr.push(subArr)
  }
  return targetArr
};