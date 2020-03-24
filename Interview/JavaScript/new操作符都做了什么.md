https://www.zhihu.com/question/36440948

var F=function(){
    //this指向谁，在定义时是不知道的
};

var p=new F;


用new调用一个函数发生了这些事：
（1）新建一个对象
instance=new Object();
（2）设置原型链
instance.__proto__=F.prototype;
（3）让F中的this指向instance，执行F的函数体。
（4）判断F的返回值类型：
如果是值类型，就丢弃它，还是返回instance。
如果是引用类型，就返回这个引用类型的对象，替换掉instance。
注：
（1）如果没有写return，相当于return undefined，JavaScript中的函数都是这样。undefined是值类型的，因此丢弃它，返回instance。
（2）如果return this相当于返回一个引用类型的对象，它自己就是instance，无所谓替换不替换了。
（3）对instance并不需要设置它的constructor属性，这个属性在instance的原型中。

原理去看ECMA 规范，在此只说效果。

function A(){}
a = new A()
跟以下代码效果差不多吧

func instantiate(fn, ...rests){
    var f = Object.create(fn.prototype)
    var val = fn.apply(f, rests)
    return isPrimitive(val) ? f : val;
}

function A(){}
a = instantiate(A)
注：
1. 用到了ES6 特性
2. isPrimitive() 太麻烦了，不是问题的核心，在此就不实现了

function newFunc (obj,name) {
    var o = {};
    o.__proto__ = Person.prototype;//绑定Person的原型
    obj.call(o, name);
    return o;
}


