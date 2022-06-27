// https://leetcode.cn/problems/reverse-linked-list/

// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  输入：head = [1,2,3,4,5]
//  输出：[5,4,3,2,1]

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

  let curr = head
  let tempNode = null
  let prevNode = null

  while(curr){
    tempNode = curr.next
    curr.next = prevNode

    prevNode = curr
    curr = tempNode
  }
  return prev
};