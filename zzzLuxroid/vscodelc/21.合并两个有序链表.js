/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 建了一个新链表
// var mergeTwoLists = function (list1, list2) {
//   let head = new ListNode(0)
//   let curr = head
//   while (list1 || list2) {
//     head.next = new ListNode(0)
//     if (!list1) {
//       head.next.val = list2.val
//       list2 = list2.next
//     } else if (!list2) {
//       head.next.val = list1.val
//       list1 = list1.next
//     } else if (list1.val <= list2.val) {
//       head.next.val = list1.val
//       list1 = list1.next
//     } else if (list1.val >= list2.val) {
//       head.next.val = list2.val
//       list2 = list2.next
//     }
//     head = head.next
//   }
//   return curr.next
// };

// 原地
// var mergeTwoLists = function(l1, l2) {
//   if(l1 === null){
//       return l2;
//   }
//   if(l2 === null){
//       return l1;
//   }
//   if(l1.val < l2.val){
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   }else{
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// };
// @lc code=end

