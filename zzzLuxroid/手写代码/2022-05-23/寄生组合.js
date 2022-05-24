function link(Son, Parent){
  let agentObj = Object.create(Parent.prototype)
  Son.prototype = agentObj
  agentObj.constr = Son
}