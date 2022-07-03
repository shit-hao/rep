// 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。
// （即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  if(!root){
    return []
  }
  let k = 1
  let targetArr = []
  let queue = [root]
  while(queue.length > 0){
    let subArr = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if(k % 2 === 0){ //到奇数了
        subArr.unshift(node.val)
      }else{
        subArr.push(node.val)
      }
      if(node){
        if(node.left){
          queue.push(node.left)
        }
        if(node.right){
          queue.push(node.right)
        }
      }
    }
    k++
    targetArr.push(subArr)
  }
  return targetArr
};