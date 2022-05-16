function bianli (root){
  let queue = [root]
  let result = []
  while(queue.length > 0){
    let len = queue.length
    let subArr = []
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