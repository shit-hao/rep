/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
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
var zigzagLevelOrder = function (root) {
  if(!root){
    return []
  }
  let target = []
  let k = 0
  let queue = [root]
  while (queue.length) {
    let subTarget = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      if (k % 2 === 0) { //正
        subTarget.push(node.val)
      } else {
        subTarget.unshift(node.val)
      }
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    k++
    target.push(subTarget)
  }
  return target
};
// @lc code=end

