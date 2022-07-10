/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  if(!root){
    return []
  }
  let target = []
  let queue = [root]
  while(queue.length){
    let subTarget = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      subTarget.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    target.push(subTarget)
  }
  return target
};
// @lc code=end

