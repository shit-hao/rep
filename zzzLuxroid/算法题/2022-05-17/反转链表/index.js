
// 反转链表
function res(head){
  let curr = head
  let prev = null
  let tempNode = null
  
  while(curr.next) {
    tempNode = curr.next
    curr.next = prev

    prev = curr
    curr = tempNode
  }
}