父子组件的执行顺序为，
父组件beforeCreated ->父组件created ->父组件beforeMounted ->
子组件beforeCreated ->子组件created ->子组件beforeMounted ->子组件mounted -> 
父组件mounted

为什么是这样的顺序
callHook(vm, 'beforeMount')
根据Vue源码 
调用beforeMount之前开始将组件转为Vnode(vm._render())
开始挂载子组件

