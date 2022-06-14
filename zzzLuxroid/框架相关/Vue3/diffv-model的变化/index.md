概览
https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88
以下是对变化的总体概述：

-非兼容：用于自定义组件时，v-model prop 和事件默认名称已更改：
1,prop：value -> modelValue；
2,事件：input -> update:modelValue；
-非兼容：v-bind 的 .sync 修饰符和组件的 model 选项已移除，可在 v-model 上加一个参数代替；
-新增：现在可以在同一个组件上使用多个 v-model 绑定；
-新增：现在可以自定义 v-model 修饰符。
更多信息，请见下文。

在 3.x 中，自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：

<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>