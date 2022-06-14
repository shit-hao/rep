function link(child, parent) {
  let agentObj = Object.create(parent.prototype)
  agentObj.constructor = child
  child.prototype = agentObj
}

let person = function(){
  this.a = 3
}
person.prototype.sayHello = function(){
  console.log('this.a')
  // console.log(thi)
}

let student = function(){
  // this.a = 3
}

link(student, person)