function a(root){
  let result = []
  let queue = [root]
  while(queue.length > 0){
    let subArr = []
    let len = queue.length
    
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      subArr.push(node.val)
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    result.push(subArr)
  }
}