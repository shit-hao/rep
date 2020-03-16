https://www.jianshu.com/p/0f2890dbaa56
Provider 组件可以说是非常简单只做了三件事
1.把 redux 中 createStore 函数所创建出来的 store 声明到全局的 context中的并挂载
2.返回自己的 children 组件，且 children 组件只有有一个，不能是数组。
3.在 componentWillReceiveProps 中监视 store 的变化，如果重新传了一个 store 则抛出异常。
在 redux 的理念里，全局只能有一个 store，且不能改变 store 的引用。