https://github.com/mqyqingfeng/Blog/issues/4

https://juejin.cn/post/6844903682283143181#heading-5

其实很简单，就三种，全局代码、函数代码、eval代码。

这三种代码才会生成执行上下文
 LIFO（后进先出）数据结构的栈

刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。
举个例子，当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution context)"
所以 JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文
ECStack = [];
function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3();
}

function fun1() {
    fun2();
}

fun1();

当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。知道了这样的工作原理，让我们来看看如何处理上面这段代码：
// 伪代码

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext

创建执行上下文有两个阶段：1) 创建阶段 和 2) 执行阶段。

创建阶段
1.this 值的决定，即我们所熟知的 This 绑定。
2.创建词法环境组件。
3.创建变量环境组件。

ExecutionContext = {
  ThisBinding = <this value>,
  LexicalEnvironment = { ... },
  VariableEnvironment = { ... },
}
第一步this绑定，懂的都懂

第二步词法环境组件
词法环境组件包含2个组件
1.环境记录器是存储变量和函数声明的实际位置。
2.外部环境的引用意味着它可以访问其父级词法环境（作用域）
词法环境有两种类型：

1.全局环境（在全局执行上下文中）是没有外部环境引用的词法环境。全局环境的外部环境引用是 null。它拥有内建的 Object/Array/等、在环境记录器内的原型函数（关联全局对象，比如 window 对象）还有任何用户定义的全局变量，并且 this的值指向全局对象。
2.在函数环境中，函数内部用户定义的变量存储在环境记录器中。并且引用的外部环境可能是全局环境，或者任何包含此内部函数的外部函数。

环境记录器也有两种类型
1.声明式环境记录器存储变量、函数和参数。
2.对象环境记录器用来定义出现在全局上下文中的变量和函数的关系。
简而言之，

在全局环境中，环境记录器是对象环境记录器。
在函数环境中，环境记录器是声明式环境记录器。

变量环境：它同样是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系。

在 ES6 中，词法环境组件和变量环境的一个不同就是前者被用来存储函数声明和变量（let 和 const）绑定，而后者只用来存储 var 变量绑定。

https://github.com/mqyqingfeng/Blog/issues/8

执行上下文

在《JavaScript深入之执行上下文栈》中讲到，当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

变量对象(Variable object，VO)
作用域链(Scope chain)
this

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

4.checkscope 函数执行上下文初始化：

复制函数 [[scope]] 属性创建作用域链，
用 arguments 创建活动对象，
初始化活动对象，即加入形参、函数声明、变量声明，
将活动对象压入 checkscope 作用域链顶端。
