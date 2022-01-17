https://juejin.cn/post/6844903973502058504

Vue组件是如何运行起来的

模板通过编译生成ast
ast树生成Vue的Render函数
render渲染函数结合数据生成VNode((Virtual DOM Node))树
Diff和patch之后生成新的ui界面(真实DOM渲染)