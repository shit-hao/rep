function link(child, parent){
  let agentObj = Object.create(parent.prototype)
  child.prototype = agentObj
  agentObj.constructor = child
}

function _crate(context){
  function fn(){}
  fn.prototype = context
  return new fn()
}