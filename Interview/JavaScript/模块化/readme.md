CommonJS
用于node
同步
require
exports
module.exports

有缓存

commonJS用同步的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

ES Module

ES模块是ES6新提出的模块规范 
用法 import export xxx export default


差异

1.CommonJS模块输出的是一个值的复制，ES6模块输出的是值的引用。

2.CommonJS模块是运行时加载，ES6模块是编译时加载。

1.差异可看demo
ES6模块的运行机制与CommonJS不一样。JS引擎对脚本静态分析的时候，遇到模块加载命令import就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用到被加载的模块中取值。换句话说，ES6的import有点像Unix系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

ES Module 由于是编译时加载，所以不可以使用变量 // 编译时只是静态分(解)析代码，并未运行，变量未被赋值，因此不知道变量的值
CommonJS 由于是运行时加载，所以可以使用变量 // 运行时，变量被赋值后，因此可以拿到变量的值

在学习Node.js时，经常能看到两种导出模块的方式：module.exports和exports。
module和exports是Node.js给每个js文件内置的两个对象

从打印我们可以看出，module.exports和exports一开始都是一个空对象{}，实际上，这两个对象指向同一块内存。这也就是说module.exports和exports是等价的（有个前提：不去改变它们指向的内存地址）

require引入的对象本质上是module.exports。这就产生了一个问题，当 module.exports和exports指向的不是同一块内存时，exports的内容就会失效。

https://www.jianshu.com/p/beafd9ac9656
