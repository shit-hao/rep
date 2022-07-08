/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 反转链表
var reverseList = function(head) {
  let curr = head
  let prevNode = null
  let tempNode = null

  while(curr){
    tempNode = curr.next
    curr.next = prevNode

    prevNode = curr
    curr = tempNode
  }
  return prevNode
};
// @lc code=end

