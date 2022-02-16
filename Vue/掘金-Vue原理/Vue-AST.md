https://juejin.cn/post/6844903798347939853

AST 抽象语法树： Abstract Syntax Tree 的简称，主要做三步parse:
1.Vue使用HTML的Parser将HTML模板解析为AST
2.optimizer:对AST进行一些优化static静态节点的标记处理，提取最大的静态树，当_update更新界面时，会有一个patch的过程，diff算法会直接跳过静态节点，从而减少了patch的过程，优化了patch的性能
3.generateCode:根据 AST 生成 render 函数

解析器 
js解析器将js源码转为抽象语法树 分两步 
词法分析和语法分析

词法分析
这个过程将字符组成的字符串分解成有意义的代码块，这些代码块成为词法单元(token)
举个例子: let a = 1, 这段程序通常会被分解成为下面这些词法单元: let 、a、=、1、 ；空格是否被当成词法单元，取决于空格在这门语言中的意义。

语法分析
这个过程是将词法单元流转换成一个由元素嵌套所组成的代表了程序语法结构的树,这个树被称为"抽象语法树"（abstract syntax code，AST）

代码生成
将AST转换成可执行代码的过程被称为代码生成.

Babel原理
Babel插件就是作用于抽象语法树
Babel 的三个主要处理步骤分别是：解析（parse），转换（transform），生成（generate）。

用于将Vue的模板转换为render函数
可以理解为JavaScript语言的最小单元，将es6拆解为AST，然后修改AST在生成es5

词法分析，语法分析
词法分析，let a = 10，拆解let,a,=,10，
语法分析，根据词法分析的结果，转成AST

简单手写一个babel，forestpack
使用@babel/parser解析为AST
@babel/traverse使用这个库遍历，返回依赖
transformFromAst，@babel/core 转换AST
