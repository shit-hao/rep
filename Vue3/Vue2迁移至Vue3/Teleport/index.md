https://v3.cn.vuejs.org/guide/teleport.html
Vue 鼓励我们通过将 UI 和相关行为封装到组件中来构建 UI。我们可以将它们嵌套在另一个内部，以构建一个组成应用程序 UI 的树。
用于不使用fixed hack弹框位置 快速修改dom在dom树中的位置

Teleport 提供了一种干净的方法，允许我们控制在 DOM 中哪个父节点下渲染了 HTML，而不必求助于全局状态或将其拆分为两个组件。

<!-- <teleport to="body">
  <div v-if="modalOpen" class="modal">
    <div>
      I'm a teleported modal! 
      (My parent is "body")
      <button @click="modalOpen = false">
        Close
      </button>
    </div>
  </div>
</teleport> -->

一个虚拟标签 带有to属性 
如果 <teleport> 包含 Vue 组件，则它仍将是 <teleport> 父组件的逻辑子组件：
在这种情况下，即使在不同的地方渲染 child-component，它仍将是 parent-component 的子级，并将从中接收 name prop。
这也意味着来自父组件的注入会正常工作，在 Vue Devtools 中你会看到子组件嵌套在父组件之下，而不是出现在他会被实际移动到的位置。

在同一目标上使用多个 teleport

一个常见的用例场景是一个可重用的 <Modal> 组件，它可能同时有多个实例处于活动状态。对于这种情况，多个 <teleport> 组件可以将其内容挂载到同一个目标元素。顺序将是一个简单的追加——稍后挂载将位于目标元素中较早的挂载之后。






