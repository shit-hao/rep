https://juejin.cn/post/6844903894980509703
在new Vue()时，内部会执行一个this._init()方法，这个方法是在initMixin(Vue)内定义的:
export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    ...
  }
}
let uid = 0

Vue.prototype._init = function(options) {

  const vm = this
  vm._uid = uid++  // 唯一标识
  
  vm.$options = mergeOptions(  // 合并options
    resolveConstructorOptions(vm.constructor),
    options || {},
    vm
  )
  ...
  initLifecycle(vm) // 开始一系列的初始化
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callHook(vm, 'created')
  ...
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}

请问可以在beforeCreate钩子内通过this访问到data中定义的变量么，为什么以及请问这个钩子可以做什么？
是不可以访问的，因为在vue初始化阶段，这个时候data中的变量还没有被挂载到this上，这个时候访问值会是undefined。
beforeCreate这个钩子在平时业务开发中用的比较少，而像插件内部的instanll方法通过Vue.use方法安装时一般会选在beforeCreate这个钩子内执行，vue-router和vuex就是这么干的。
