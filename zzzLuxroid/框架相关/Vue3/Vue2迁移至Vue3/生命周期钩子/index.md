https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html
你可以通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子。

就是之前的钩子 on+驼峰

因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。