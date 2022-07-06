function fun(obj) {
  function Son() { };
  Son.prototype = obj;
  return new Son();
}
function JiSheng(obj) {
  var clone = fun(obj);
  clone.Say = function () {
    console.log('我是新增的方法');
  }
  return clone;
}
var parent = {
  name: '张三'
}
var parent1 = JiSheng(parent);
var parent2 = JiSheng(parent);
console.log(parent2.Say == parent1.Say);// false

// 优缺点：跟构造函数继承类似，调用一次函数就得创建一遍方法，无法实现函数复用，效率较低