function fun(obj) {
  function Son() { };
  Son.prototype = obj;
  return new Son();
}
var parent = {
  name: '张三'
}
var son1 = fun(parent);
var son2 = fun(parent);
console.log(son1.name);//张三
console.log(son2.name);//张三

// 优缺点：跟原型链类似
// Object.create() 源码