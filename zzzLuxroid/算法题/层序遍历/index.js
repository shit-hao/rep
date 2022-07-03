
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
// 二叉树：[3,9,20,null,null,15,7]
let tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
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