/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 快慢指针
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr = head
  let slow = fast = curr
  while(n--){
    fast = fast.next
  }
  if(!fast) return curr.next
  while(fast.next){
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
};
// @lc code=end

