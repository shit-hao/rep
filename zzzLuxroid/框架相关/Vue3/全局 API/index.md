Vue 2.x 有许多全局 API 和配置，它们可以全局改变 Vue 的行为。例如，要注册全局组件，可以使用 Vue.component API，就像这样：
Vue.component('button-counter', {
  data: () => ({
    count: 0
  }),
  template: '<button @click="count++">Clicked {{ count }} times.</button>'
})

类似地，全局指令的声明方式如下


Vue.directive('focus', {
  inserted: el => el.focus()
})


虽然这种声明方式很方便，但它也会导致一些问题。从技术上讲，Vue 2 没有“app”的概念，我们定义的应用只是通过 new Vue() 创建的根 Vue 实例。从同一个 Vue 构造函数创建的每个根实例共享相同的全局配置，因此：

a.在测试期间，全局配置很容易意外地污染其他测试用例。用户需要仔细地存储原始全局配置，并在每次测试后恢复 (例如重置 Vue.config.errorHandler)。有些 API 像 Vue.use 以及 Vue.mixin 甚至连恢复它们所产生的作用的方法都没有，这使得涉及插件的测试特别棘手。实际上，vue-test-utils 必须实现一个特殊的 API createLocalVue 来处理此问题：



一个新的全局 API：createApp

调用 createApp 返回一个应用实例，一个 Vue 3 中的新概念。


import { createApp } from 'vue'

const app = createApp({})

应用实例暴露了 Vue 2 全局 API 的一个子集，经验法则是，任何全局改变 Vue 行为的 API 现在都会移动到应用实例上