https://www.bilibili.com/video/BV1G54y1s7xV?from=search&seid=17931254926294253435&spm_id_from=333.337.0.0

Vue 非侵入式
React 侵入式

Object.defineProperty IE8以上

在getter中收集依赖
在setter中触发依赖

收集的是Watcher
触发的也是Watcher
有点抽象哈
可以理解为Watcher是一个组件

defineReactive可以理解为为一个组件内的可双向绑定的数据做双向绑定

每个组件有一个dep，每一组件中的值也有一个dep
this.dep = new Dep()
每执行一个defineReactive就会执行一个new Dep() = 每一组件中的值也有一个dep
const dep = new Dep()

只要你get一个组件中的一个value,这个value就会收集这个组件
当你set一个组件中的value，这个value就会触发这个组件的更新逻辑