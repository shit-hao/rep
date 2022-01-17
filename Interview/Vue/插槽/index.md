用法
通过插槽分发内容

可以在可复用<hmw></hmw>的组件中声明插槽<slot></slot>
eg
<hmw>
  我是hmw
</hmw>
如果没有对插槽命名，我是hmw这段html是默认插入组件内的<slot></slot>中

不具名slot的默认内容

组件内<slot>我是默认内容</slot>，如果父组件没有slot内容传入，则使用默认内容，提供内容则会替换插槽的默认内容

对插槽命名(具名插槽)

子组件用法
<slot name="header"></slot>
<slot name="footer"></slot>

父组件插入
 <template v-slot:header>
  <h1>Here might be a page title</h1>
 </template>
 <template v-slot:footer>
  <h1>Here might be a page title</h1>
 </template>

  <template #header>
  <h1>Here might be a page title</h1>
 </template>
 <template #footer>
  <h1>Here might be a page title</h1>
 </template>
一个不带 name 的 <slot> 出口会带有隐含的名字“default”。

slot作用域 slot-scope

在子组件中给slot传递参数
例如
    <slot name="hmw" :user='user'>
      <!-- {{user.o}} -->
    </slot>

父组件中使用
  <template #hmw='slotProps'>
    333
    {{ slotProps.user.m }}
  </template>

  如果使用#缩写，不具名插槽请务必使用#default 或者使用v-slot不指定name

作为一条规则，请记住：
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法

解构插槽 Prop

可以对插槽进行结构
<template #hmw='slotProps'>
  333
  {{ slotProps.user.m }}
</template>

<template #hmw='{ user }'>
  333
  {{ user.m }}
</template>

缩写 使用# 代替v-slot:
v-slot:选中插槽



