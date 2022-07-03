// https://leetcode.cn/problems/path-sum/
const hasPathSum = (root, sum) => {
  if (root == null) { // 遍历到null节点
    return false;
  }
  if (root.left == null && root.right == null) { // 遍历到叶子节点
    return sum - root.val == 0;                  // 如果满足这个就返回true。否则返回false
  }
  // 不是上面的情况，则拆成两个子树的问题，其中一个true了就行
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
