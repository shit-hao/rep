function rever(root){
  let curr = root
  let prev = null
  let tempSave =  null
  while(curr.next){
    tempSave = curr.next
    curr.next = prev
    
    prev = curr
    curr = tempSave
  }
}