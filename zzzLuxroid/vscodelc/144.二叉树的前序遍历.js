/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// 中 左 右

var preorderTraversal = function (root) {
  let target = []
  function dfs(root){
    if(!root){
      return
    }
    target.push(root.val)
    dfs(root.left)
    dfs(root.right)
  }
  dfs(root)
  return target
};
// var preorderTraversal = function (root) {
//   let target = []
//   let stack = []
//   while (root || stack.length) {
//     while (root) {
//       stack.push(root)
//       target.push(root.val)
//       root = root.left
//     }
//     let node = stack.pop()
//     root = node.right
//   }
//   return target
// };
// @lc code=end

