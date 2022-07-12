function Parent(name) {
  this.name = name;
  this.type = ['JS', 'HTML', 'CSS'];
}
Parent.prototype.Say = function () {
  console.log(this.name);
}
function Son(name) {
  Parent.call(this, name);
}
Son.prototype = new Parent();
son1 = new Son('张三');
son2 = new Son('李四');
son1.type.push('VUE');
son2.type.push('php');
console.log(son1.type);//['JS','HTML','CSS','VUE']
console.log(son2.type);//['JS','HTML','CSS','php']
son1.Say();//张三
son2.Say();//李四

// 缺点：
// 无论什么情况下，都会调用两次父级构造函数：一次是在创建子级原型的时候，另一次是在子级构造函数内部
// 多调用一次父级构造函数