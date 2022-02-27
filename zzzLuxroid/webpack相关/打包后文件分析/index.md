https://segmentfault.com/a/1190000022669224
https://zhuanlan.zhihu.com/p/32093510
webpack打包后的文件是IIFE匿名自执行函数

 (function(modules) { // webpackBootstrap
    // The module cache
    // 模块缓存对象
    var installedModules = {};
    // The require function
    // webpack 实现的 require() 函数
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        // 如果模块已经加载过，直接返回缓存
        if(installedModules[moduleId])
            return installedModules[moduleId].exports;
        // Create a new module (and put it into the cache)
        // 创建一个新模块，并放入缓存
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        // Execute the module function
        // 执行模块函数
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        // Flag the module as loaded
        // 将模块标识为已加载
        module.loaded = true;
        // Return the exports of the module
        return module.exports;
    }
 
 
    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;
    // expose the module cache
    __webpack_require__.c = installedModules;
    // __webpack_public_path__
    __webpack_require__.p = "";
    // Load entry module and return exports
    return __webpack_require__(0);
 })([function(module, exports) {
    var chunk1=1;
    exports.chunk1=chunk1;
}]);

1.匿名自执行函数(IIFE)

installedModules
模块缓存对象


__webpack_require__
webpack实现的require函数
具体功能，每次require先从installedModules查找有则直接返回，没有在重新加载，参数是moduleId


commonjs的require被替换成了 __webpack_require__

webpackJsonpCallback

webpack将所有的import moduleName from 'xxModule'都变成了一个Map对象，key为文件路径，value为一个可执行的函数，而函数内容其实就是模块中导出的内容，当然，模块自己也被webpack做了一些处理，接着往下进行




import moduleName from 'xxModule'和import('xxModule')经过webpack编译打包后最终变成了什么？在浏览器中是怎么运行的？

import经过webpack打包以后变成一些Map对象，key为模块路径，value为模块的可执行函数；

代码加载到浏览器以后从入口模块开始执行，其中执行的过程中，最重要的就是webpack定义的__webpack_require__函数，负责实际的模块加载并执行这些模块内容，返回执行结果，其实就是读取Map对象，然后执行相应的函数；
当然其中的异步方法（import('xxModule')）比较特殊一些，它会单独打成一个包，采用动态加载的方式，具体过程：当用户触发其加载的动作时，会动态的在head标签中创建一个script标签，然后发送一个http请求，加载模块，模块加载完成以后自动执行其中的代码，主要的工作有两个，更改缓存中模块的状态，另一个就是执行模块代码

异步加载Chunk
异步的import会转成__webpack_require__.e

__webpack_require__.e会维护一个promise数组，当没加载时会动态加载一个script标签去加载js
节流？多次加载会判断是否加载过，往promise数组里赋值，最后return Promise.all
说明文件只会加载一次，但是异步import的then函数会执行多次

webpack怎么知道文件加载完成? 
if(installedChunkData !== 0) { // 0 means "already installed".
}
installedChunkData这个变量会在异步加载的js中调用一个函数置为0 所以当js没执行，一直处于未安装状态
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{
push函数被劫持

var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
jsonpArray.push = webpackJsonpCallback;


单文件分析:
一些webpack前置函数

一个IIFE，参数是一个modules对象 key是文件路径,value是一个函数,内包含eval代码
return __webpack_require__(__webpack_require__.s = "./src/index.js");
后执行


__webpack_exports__


模块解析 
es模块用__webpack_require__.r解析 Object.defineProperty(exports, '__esModule', { value: true });
cjs模块用__webpack_require__解析

简单聊聊 Symbol.toStringTag

一般来说，我们可以通过 Object.prototype.toString 来知道有一个变量的类型是啥
但是对于自定义的类创建的对象而言，就没有这么友好了，浏览器统一都是返回 [Object, Object]。
Symbol.toStringTag 这个东西是对象的内置属性名，其属性值表示的就是该对象的类型。

Object.prototype.toString 方法通过读取 toStringTag 来返回指定对象的类型，比如 Number、Array、Object 等等。
let obj = {};
Object.defineProperty(obj,Symbol.toStringTag,{value: 'my-Object'})
Object.prototype.toString.call(obj)
'[object my-Object]'


多文件分析
IIFE传入的对象中有两个key-value，根据是esm还是cjs使用__webpack_require__.r还是__webpack_require__
没有特殊操作两个文件会打包进一个文件

// define getter function for harmony exports
__webpack_require__.d
这个函数会在
	__webpack_require__.d = function(exports, name, getter) {
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};
会在一个exports上定义一个name和一个getter来导出这个模块的变量

异步文件解析
https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html

// 正确
import packageMain from 'commonjs-package';

// 报错
import { method } from 'commonjs-package';


__webpack_require__.e异步加载



不管esm还是cjs 都转成cjs处理

可以理解为esm可以静态分析，但是动态加载不能运行时分析，所以需要全量import需要使用cjs的方式使用


