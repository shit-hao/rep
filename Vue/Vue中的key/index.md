https://juejin.im/post/5d045d026fb9a07ec42b58d1
先看官方文档中 key 的一句介绍

有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。
使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

比如现在有一个数组 [1,2,3,4]变成了[2,1,3,4]，那么没有 key 的值会采取一种“就地更新策略”，
见下图。它不会移动元素节点的位置，而是直接修改元素本身，这样就节省了一部分性能

而对于有 key 值的元素，它的更新方式如下图所示。可以看到，这里它对 DOM 是移除/添加的操作，这是比较耗性能的。
直接更换dom节点

默认模式指的就是不带 key 的状态，对于依赖于子组件状态或者临时 DOM 状态的，这种模式是不适用的。

使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。 
它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景的时候它可能会很有用:

完整地触发组件的生命周期钩子
触发过渡

如果不使用key，Vue会用一种就地复用的逻辑，但是这样就带来一些问题，比如dom的一些状态，在修改列表时还会存在

为啥会有这样的逻辑，可以看下dom-diff是咋写的
dom-diff首先会判断是否是sameNode，如果不是就直接替换，如果是会走下面的流程，看下sameNode是怎么判断的
function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key值是否一样
    oldVnode.tagName === newVnode.tagName && // 标签名是否一样
    oldVnode.isComment === newVnode.isComment && // 是否都为注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了data
    sameInputType(oldVnode, newVnode) // 当标签为input时，type必须是否相同
  )
}
会判断key和tagName,等，所有当我们一个列表key没有发生变化，Vue会认为不需要替换html标签，所以会出现dom的一些状态没有发生变化，只变化了他的属性值，另一个分支的dom-diff,原则上是重新排列你的dom元素
