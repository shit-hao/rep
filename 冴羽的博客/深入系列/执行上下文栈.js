https://github.com/mqyqingfeng/Blog/issues/4


接下来问题来了，我们写的函数多了去了，如何管理创建的那么多执行上下文呢？

所以 JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文

为了模拟执行上下文栈的行为，让我们定义执行上下文栈是一个数组：

ECStack = [];

试想当 JavaScript 开始要解释执行代码的时候，
最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，
我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，所以程序结束之前，
ECStack 最底部永远有个 globalContext：
 ECStack = [
    globalContext
];

🌰
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

压栈顺序
globalContext -> fun1 -> fun2 ->fun3
出栈顺序
fun3-> fun2 ->fun1->globalContext
