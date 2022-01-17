// 1.反转链表
// 1-2-3-4-5
// 2-1-3-4-5
// 3-2-1-4-5
// 4-3-2-1-5
// 5-4-3-2-1

// 1-2-3-4-5
// 2-1-3-4-5
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var list = head;
    var p = list;
    var q = null;
   
   if(p == null)	//做个判断啊！！非常傻的一个错呜呜呜
       return null;

   while(p.next !== null) {
       q = p.next;
       p.next = q.next;
       q.next = list;
       list = q;     
   }
   return list;
};


// 2.最短路径

// 3.多次修改一个dom节点js和原生dom