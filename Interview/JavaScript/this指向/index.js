var b = 1;
function a () {
  console.log(b);
  var b = 2;
  console.log(this, this.b);
  this.b = 3;
}
a();			//undefined,	window,	1
new a();		//undefined,	a{},	undefined

// new一个函数的时候，相当于引用这个函数
// 如果是箭头函数，不能使用new，因为箭头函数不是构造函数