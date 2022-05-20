function link(Son, Father){
  let agentObj = Object.create(Father.prototype)
  agentObj.constructor = Son
  child.prototype = agentObj
}