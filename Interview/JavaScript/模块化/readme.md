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
