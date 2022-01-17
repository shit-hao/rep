// 寄生组合继承
function parent(t) {
  this.t = t
}
parent.prototype.sayT = function () {
  console.log('t')
  console.log(this.t)
}

function child(t) {
  parent.call(this,t)
}
// child.prototype.sayT1 = function () {
//   console.log('t')
//   console.log(this.t)
// }

function createObj(o) {
	function F() { }
	F.prototype = o;
	return new F();
}

function link(parent, child) {
  // createObj
  let agentProto = createObj(parent.prototype)
  agentProto.constructor = child

  child.prototype = agentProto
}
link(parent,child)
child.prototype.sayT1 = function () {
  console.log('t')
  console.log(this.t)
}
let Child = new child(1)
Child.sayT1()



function link(parent, child) {
  let agentObj = Object.create(parent.prototype)
  agentObj.constructor = child
  child.prototype = agentObj
}

function _create(o) {
  function F() { }
  F.prototype = o
  return new F()
}

function A () {
  this.a=1
  this.b = 2
  console.log('this')
  console.log(this)
  if(this instanceof A) {
      return this
  }
  return new A()
}

function Person(){
  console.log('this')
  console.log(this)
  if(this instanceof Person){
      this.name = 'wang'
  }else{
      throw new Error('必须通过new关键字调用person')
  }
}
const person = new Person() // 1
