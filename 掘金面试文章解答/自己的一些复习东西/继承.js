// https://juejin.cn/post/6844903477819211784
// 1.原型链继承
function Parent() {
	this.name = 'kevin';
}

Parent.prototype.getName = function () {
	console.log(this.name);
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

// 直接重写原型
// 存在的问题：
// 1.引用类型的属性被所有实例共享 Child.prototypehi固定的一块内存地址，所以如果修改了Parent的属性，在所有child都会生效
// 2.在创建 Child 的实例时，不能向Parent传参 这个比较好理解

// 2.借用构造函数(经典继承)
function Parent() {
	this.names = ['kevin', 'daisy'];
}
function Child() {
	Parent.call(this);
}
var child1 = new Child();
child1.names.push('yayu');
console.log(child1.names); // ["kevin", "daisy", "yayu"]
var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy"]
// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在 Child 中向 Parent 传参
// 缺点：
// 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

// 3.组合继承
// 原型链继承和经典继承双剑合璧
function Parent(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
	console.log(this.name)
}
function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}
Child.prototype = new Parent();
var child1 = new Child('kevin', '18');
child1.colors.push('black');
console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]
var child2 = new Child('daisy', '20');
console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式

// 4.原型式继承
function createObj(o) {
	function F() { }
	F.prototype = o;
	return new F();
}
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
// 缺点：
// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
// 5.寄生式继承
function createObj(o) {
	var clone = object.create(o);
	clone.sayName = function () {
		console.log('hi');
	}
	return clone;
}
// 跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
// 6. 寄生组合式继承

// 先看组合继承 缺点是会调用两个父类的构造函数Parent.call(this, name);，new Parent()
function Parent(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
	console.log(this.name)
}

function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

console.log(child1)

// 寄生组合继承
function Parent(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
	console.log(this.name)
}
function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
}
// 关键的三步
var F = function () { };
F.prototype = Parent.prototype;
Child.prototype = new F();
var child1 = new Child('kevin', '18');
console.log(child1);

// 最后我们封装一下这个继承方法

// function object(o) {
// 	function F() { }
// 	F.prototype = o;
// 	return new F();
// }

// function prototype(child, parent) {
// 	// var prototype = object(parent.prototype);
// 	function F() { }
// 	F.prototype = parent.prototype;
// 	prototype = new F();
// 	prototype.constructor = child;
// 	child.prototype = prototype;
// }

// // 当我们使用的时候：
// prototype(Child, Parent);

function child(params) {
	
}

function parent(params) {
	
}

function link(cild,parent) {
	function F() { }
}

