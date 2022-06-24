https://juejin.cn/post/6844903769444974606

高阶函数

高阶函数：英文叫Higher-order function，高阶函数是对其他函数进行操作的函数，可以将它们作为参数或返回它们。简单来说，高阶函数是一个函数，它接受函数作为参数或函数作为输出返回。

在不同的编程语言中都存在高阶函数，例如Javascript,Python,C#,C等等， JS中一个简单的高阶函数：

function add(x, y, f) {
    return f(x) + f(y);
}
// 当调用add(-5, 6, Math.abs)时，参数x,y和f分别接收-5,6和
// 函数Math.abs，根据函数定义，可以推导计算过程为：
// x = -5
// y = 6
// f = Math.abs
// f(x) + f(y) ==> Math.abs(-5) + Math.abs(6) ==> 11
// return 11

// 用代码验证一下
add(-5, 6, Math.abs); // 11

高阶函数的应用
我们在平时的编程中都会使用到高阶函数，那么接下来一起看一下具体有哪些运用场景呢。

JavaScript内置高阶函数
JS中内置了一些常用的高阶函数，例如：Array.prototype.map，Array.prototype.filter和Array.prototype.reduce等等。
例如：使用Array的sort函数，sort接收一个函数作为参数。实现为数组arr排序。

const arr =[1,5,3];
arr.sort((a, b) => a - b);

JS — 纯函数

简单来说，满足下面两个条件就称为纯函数，

1.一个函数的返回结果只依赖于它的参数
2.函数在执行过程里面没有任何副作用【不会造成外部变量的改变】

一个函数的返回结果只依赖于它的参数


const a = 1;
const foo = (b) => a+b;
foo(3); // 4

从上面的例子可以看出，执行foo()函数，函数内的计算依赖外部变量a,因此执行foo函数的结果是会根据a的值变化而变化的，当我们能固定foo传入的参数，但是不能确定a的值，它的结果值是不可预料的，所以这个函数不是一个纯函数，

const a = 1;
const foo = (x, y) => x + y;
foo(1, 3); // 4

执行foo函数，当我们确定了入参x,y时，就能得出唯一的一个输出结果，而且这个无论你在哪里运行都是一样的结果。所以foo(1, 3)的返回值是可预料的。

函数在执行过程里面没有任何副作用

const foo = (obj, a) => {
    obj.a = 2;
    return obj.a + a;
}
const counter = {a: 1};
foo(counter, 3); // 5
counter.a // 2

上面的例子可以看出，我们执行foo函数，传入了两个参数，一个是counter对象，另外一个是数字常量，但是可以看出，运行完foo(counter,3)后在读取counter对象的a属性时，a的值发生了变化，说明这个函数是一个非纯函数，因为它的运行造成了外部变量发生改变，造成了副作用，

const foo = (obj, a) => {
    return obj.x + a;
}
const counter = {a: 1};
foo(counter, 3) // 4
counter.x // 1

这个时候的counter对象是没有发生改变的，foo(counter,3)执行后不会造成副作用。纯函数就是函数体内的任何操作都不能引起外部变量或者函数的变化。但是可以改变纯函数内部的变量 例

const foo = (a) => {
    const obj = { x: 1};
    obj.x = 2;
    return obj.x + a;
}

纯函数的优点：纯函数在执行的时候不用担心它会发生意外的值，一个固定的输入肯定会得出固定的输出，不会产生不可预料的数据，并且不会对外部产生任何的影响。
