先介绍几个概念

将template转为render函数，有两个方式
1.用的是带编译器的Vue版本，可以直接写template
2.不带编译器的Vue，写render函数，或者配置Vue-loader
相对应的，$mount也有两个版本
其中一个版本使用compileToFunctions把template转为render函数

vm._render() 用于将render函数转为vnode

$mount中定义,每次更新组件都调用的这个函数
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
vm._update，用于更新Vue组件状态的逻辑
它被传递给组件的_update方法执行渲染。这里所说的渲染包括首次绘制和更新，
_update内部会根据旧的vnode是否存在来判断是首绘还是更新。_update的实现大致如下：
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

当旧的vnode不存在，说明这是首次绘制，__patch__将依据虚拟DOM生成真实DOM并绘制到页面。如果旧的vnode是存在的，说明当前组件已经被绘制到页面上了，这时候__patch__将负责比对两个vnode，然后判断如何最高效地更新真实DOM，最后去更新视图。__patch__过程较为复杂，如果感兴趣，可以参考我之前关于虚拟DOM的博客：Vue源码笔记之虚拟DOM，里面有详细的patch过程和图解。

__patch__

__patch__返回一个函数return function patch (oldVnode, vnode, hydrating, removeOnly) {}
伪代码
如果是首次patch，就创建一个新的节点
老节点存在
老节点不是真实DOM并且和新节点相似
调用patchVnode修改现有节点
新老节点不相同
如果老节点是真实DOM，创建对应的vnode节点
为新的Vnode创建元素/组件实例，若parentElm存在，则插入到父元素上
如果组件根节点被替换，遍历更新父节点elm
然后移除老节点
调用insert钩子

是首次patch并且vnode.parent存在，设置vnode.parent.data.pendingInsert = queue
如果不满足上面条件则对每个vnode调用insert钩子

patchVnode-domdiff

https://juejin.cn/post/6994959998283907102

新旧虚拟DOM对比的时候，Diff算法比较只会在同层级进行, 不会跨层级比较。 所以Diff算法是:深度优先算法。 时间复杂度:O(n)
function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key值是否一样
    oldVnode.tagName === newVnode.tagName && // 标签名是否一样
    oldVnode.isComment === newVnode.isComment && // 是否都为注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了data
    sameInputType(oldVnode, newVnode) // 当标签为input时，type必须是否相同
  )
}
这段 vue 的完整源码涉及的变量比较多，我们只需要了解大致是通过 tag key inputType 来判断的就行。也就是说，
当 tag key inputType 完全相同时，我们认定节点可复用。Vue 列表 key的作用

patchVnode方法
这个函数做了以下事情：

找到对应的真实DOM，称为el
判断newVnode和oldVnode是否指向同一个对象，如果是，那么直接return
如果他们都有文本节点并且不相等，那么将el的文本节点设置为newVnode的文本节点。
如果oldVnode有子节点而newVnode没有，则删除el的子节点
如果oldVnode没有子节点而newVnode有，则将newVnode的子节点真实化之后添加到el
如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要

updateChildren
1、oldS 和 newS 使用sameVnode方法进行比较，sameVnode(oldS, newS)
2、oldS 和 newE 使用sameVnode方法进行比较，sameVnode(oldS, newE)
3、oldE 和 newS 使用sameVnode方法进行比较，sameVnode(oldE, newS)
4、oldE 和 newE 使用sameVnode方法进行比较，sameVnode(oldE, newE)
5、如果以上逻辑都匹配不到，再把所有旧子节点的 key 做一个映射到旧节点下标的 key -> index 表，然后用新 vnode 的 key 去找出在旧节点中可以复用的位置。

https://juejin.cn/post/6994959998283907102

1.首先比较2个新旧node，比如比较key和tagName，如果不是sameNode则直接替换
2.如果是sameNode则比较子节点，如果他们都是文本节点，则直接把newNode的文本覆盖oldNode，
3.如果oldNode有子节点，而newNode没有，则直接删除，
4.如果oldNode没有子节点，newNode有，则把newNode的子节点实例化挂载，
5.如果两者都有子节点，则进入updateChildren

首尾指针法

olds和news比较sameNode，移动oldNode
olds和newe比较sameNode，移动
olde和news比较sameNode，移动
olde和newe比较sameNode，移动
比较到最后，old还没有比较完，则删除剩余节点
new还没有比较完，则把多出来的节点插入相应的位置上即可

