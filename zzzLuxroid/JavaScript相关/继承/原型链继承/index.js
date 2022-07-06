function Parent() {
  this.name = 'web前端';
  this.type = ['js', 'html', 'css'];
}
Parent.prototype.Say = function () {
  console.log(this.name);
}
function Son() { };
Son.prototype = new Parent();
son1 = new Son();
son1.Say();
// 以上例子解释：
// ①创建一个叫做Parent的构造函数，暂且称为父构造函数，里面有两个属性name、type
// ②通过Parent构造函数的属性(即原型对象)设置Say方法，此时，Parent有2个属性和1个方法
// ③创建一个叫做Son的构造函数，暂且称为子构造函数   
// ④设置Son的属性(即原型对象)值为父构造函数Parent的实例对象，即子构造函数Son继承了父构造函数Parent，此时Son也有2个属性和1个方法
// ⑤对Son构造函数进行实例化，结果赋值给变量son1，即son1为实例化对象，同样拥有2个属性和1个方法
// ⑥输出son1的Say方法，结果为"web前端"
// 优点：可以实现继承
// 缺点：
// ①因为Son.prototype(即原型对象)继承了Parent实例化对象，这就导致了所有Son实例化对象都一样，都共享有原型对象的属性及方法。代码如下：
// son1 = new Son();
// son2 = new Son();
// son1.type.push('vue');
// console.log(son1.type);//['JS','html','css','vue']
// console.log(son2.type);//['JS','HTML','CSS','VUE']

// 结果son1、son2都是['JS','HTML','CSS','VUE']