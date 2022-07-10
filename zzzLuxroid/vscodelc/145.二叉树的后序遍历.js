/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// zuo you zhong
// var postorderTraversal = function (root) {
//   let target = []
//   function dfs(root) {
//     if (!root) {
//       return
//     }
//     dfs(root.left)
//     dfs(root.right)
//     target.push(root.val)
//   }
//   dfs(root)
//   return target
// };
var postorderTraversal = function (root) {
  let target = []
  let stack = []
  while(root || stack.length){
    while(root){
      stack.push(root)
      target.unshift(root.val);
      root = root.right
    }
    let node = stack.pop()
    root = node.left
  }
  return target
};
// @lc code=end

