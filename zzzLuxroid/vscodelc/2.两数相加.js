/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let addOne = 0
  let newList = new ListNode()
  let head = newList
  // let newArr = []
  while(addOne || l1 || l2){
    let partSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + addOne
    addOne = partSum >= 10 ? 1 : 0
    newList.next = new ListNode(partSum % 10)
    newList = newList.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }
  return head.next
};
// @lc code=end

