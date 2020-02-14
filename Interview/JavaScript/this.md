this很好理解，不管Java还是Js，this都指的是当前上下文，别的语言应该都是如此。
this的指向
1.Window
    比如 直接在控制台随意定义一个变量,在输出window.a，此时输出的window.a
    严格模式下也是Window
    定义一个函数，在严格模式下this是undefined
2.使用'.'操作符调用
    obj.fn()
    this指向obj(不管层级有多深,比如啊a.b.c()),this都只指向最后调用他的对象
ps:
arrow-function没有this,他只会引用父级的this
改变this可以使用call,apply,bind(这三个函数的原理就是通过'.'操作符重新执行一个函数)