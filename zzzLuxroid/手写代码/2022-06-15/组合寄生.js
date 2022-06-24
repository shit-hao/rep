function link(Parent, Son){
  let agentObj = Object.create(Parent.prototype)
  Son.prototype = agentObj
  agentObj.con = Son
}