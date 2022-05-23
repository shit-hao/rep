Vue 3 现在正式支持了多根节点的组件，也就是片段！

在 3.x 中，组件可以包含多个根节点！但是，这要求开发者显式定义 attribute 应该分布在哪里。
<!-- Layout.vue -->
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>

