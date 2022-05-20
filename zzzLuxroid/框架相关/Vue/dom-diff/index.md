https://juejin.cn/post/6994959998283907102#heading-6

新旧虚拟DOM对比的时候，Diff算法比较只会在同层级进行, 不会跨层级比较。 所以Diff算法是:深度优先算法。 时间复杂度:O(n)

function patch(oldVnode, newVnode) {
  // 比较是否为一个类型的节点
  if (sameVnode(oldVnode, newVnode)) {
    // 是：继续进行深层比较
    patchVnode(oldVnode, newVnode)
  } else {
    // 否
    const oldEl = oldVnode.el // 旧虚拟节点的真实DOM节点
    const parentEle = api.parentNode(oldEl) // 获取父节点
    createEle(newVnode) // 创建新虚拟节点对应的真实DOM节点
    if (parentEle !== null) {
      api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl)) // 将新元素添加进父元素
      api.removeChild(parentEle, oldVnode.el)  // 移除以前的旧元素节点
      // 设置null，释放内存
      oldVnode = null
    }
  }

  return newVnode
}

function sameVnode(oldVnode, newVnode) {
  return (
    oldVnode.key === newVnode.key && // key值是否一样
    oldVnode.tagName === newVnode.tagName && // 标签名是否一样
    oldVnode.isComment === newVnode.isComment && // 是否都为注释节点
    isDef(oldVnode.data) === isDef(newVnode.data) && // 是否都定义了data
    sameInputType(oldVnode, newVnode) // 当标签为input时，type必须是否相同
  )
}

两个节点不是同一个节点，直接替换，是同一个节点话走patchVnode
这个函数做了以下事情：

1.找到对应的真实DOM，称为el
2.判断newVnode和oldVnode是否指向同一个对象，如果是，那么直接return
3.如果他们都有文本节点并且不相等，那么将el的文本节点设置为newVnode的文本节点。
4.如果oldVnode有子节点而newVnode没有，则删除el的子节点
5.如果oldVnode没有子节点而newVnode有，则将newVnode的子节点真实化之后添加到el
6.如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要
updateChildren:
1、oldS 和 newS 使用sameVnode方法进行比较，sameVnode(oldS, newS)
2、oldS 和 newE 使用sameVnode方法进行比较，sameVnode(oldS, newE)
3、oldE 和 newS 使用sameVnode方法进行比较，sameVnode(oldE, newS)
4、oldE 和 newE 使用sameVnode方法进行比较，sameVnode(oldE, newE)
5、如果以上逻辑都匹配不到，再把所有旧子节点的 key 做一个映射到旧节点下标的 key -> index 表，然后用新 vnode 的 key 去找出在旧节点中可以复用的位置。
