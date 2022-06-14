function link(parent, child){
  let agentObj = Object.create(parent.prototype)
  child.prototype = agentObj
  agentObj.con = child
}