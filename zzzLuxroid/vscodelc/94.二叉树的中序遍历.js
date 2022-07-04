/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

//  递归算法很简单，你可以通过迭代算法完成吗？
// var inorderTraversal = function (root) {
//   let target = []
//   function dfs(head) {
//     if (!head) {
//       return []
//     }
//     dfs(head.left)
//     target.push(head.val)
//     dfs(head.right)
//   }
//   dfs(root)
//   return target
// };

// 迭代实现
var inorderTraversal = function(root) {
  let target = []
  let stack = []
  while(root || stack.length){
    while(root){
      stack.push(root)
      root = root.left
    }
    let node = stack.pop()
    target.push(node.val)
    root = node.right
  }
  return target
};

// @lc code=end

