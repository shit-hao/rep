// 寄生组合继承
<!-- https://www.cnblogs.com/qianxiaox/p/14017183.html -->
<!-- https://juejin.cn/post/6844903477819211784 -->
function link(child, parent) {
  let agentObj = Object.create(parent.prototype)
  agentObj.constructor = child
  child.prototype = agentObj
}

function parent(t) {
  this.t = t
}

function child(params) {
  parent.call(this, params)
}
child.prototype.say = function () {
  console.log('this.t')
  console.log(this.t)
}

link(child, parent)
let Child = new child(1)
Child.say()

function _create(o) {
  function F() {}
  F.prototype = o
  return new F()
}
