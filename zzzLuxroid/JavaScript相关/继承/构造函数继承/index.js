function Parent() {
  this.name = 'web前端';
  this.type = ['JS', 'HTML', 'CSS'];
  this.hmw = ()=>{
    console.log('this.name')
    console.log(this.name)
  }
}
function Son() {
  Parent.call(this);
}
son1 = new Son();
son1.type.push('VUE');
console.log(son1.type);//['JS','HTML','CSS','VUE']
son2 = new Son();
console.log(son2.type);//['JS','HTML','CSS']

// 以上例子解释：
// ①创建父级构造函数Parent，有name、type两个属性
// ②创建子级构造函数Son，函数内部通过call方法调用父级构造函数Parent，实现继承
// ③分别创建构造函数Son的两个实例化对象son1、son2，对son1的type属性新增元素，son2没有新增，结果不一样，说明实现了独立
// 优点：
// ①实现实例化对象的独立性；
// ②还可以给实例化对象添加参数

// 缺点：
// ①方法都在构造函数中定义，每次实例化对象都得创建一遍方法，基本无法实现函数复用
// ②call方法仅仅调用了父级构造函数的属性及方法，没有办法调用父级构造函数原型对象的方法