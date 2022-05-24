function get(root){
  let result = []
  let queue = [root]
  while(queue.length > 0){
    let len = queue.length
    let subResult = []
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      subResult.push(node.val)
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
    result.push(subResult)
  }
}