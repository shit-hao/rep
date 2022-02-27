用于更新Vue组件状态的逻辑
https://zhuanlan.zhihu.com/p/419896443

它被传递给组件的_update方法执行渲染。这里所说的渲染包括首次绘制和更新，
_update内部会根据旧的vnode是否存在来判断是首绘还是更新。_update的实现大致如下：

当旧的vnode不存在，说明这是首次绘制，__patch__将依据虚拟DOM生成真实DOM并绘制到页面。如果旧的vnode是存在的，说明当前组件已经被绘制到页面上了，这时候__patch__将负责比对两个vnode，然后判断如何最高效地更新真实DOM，最后去更新视图。__patch__过程较为复杂，如果感兴趣，可以参考我之前关于虚拟DOM的博客：Vue源码笔记之虚拟DOM，里面有详细的patch过程和图解。

_update 
  updateComponent = () => {
    vm._update(vm._render(), hydrating)
  }

 new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  使用观察者模式将_update逻辑收集进vm的依赖

Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
    const vm: Component = this
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const restoreActiveInstance = setActiveInstance(vm)
    vm._vnode = vnode
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    restoreActiveInstance()
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  }


__patch__