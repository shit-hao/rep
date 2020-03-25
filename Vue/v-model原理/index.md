官方文档解释的很清楚
在组件上使用v-model
https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model

<input v-model="searchText">
等价于：
<input
  v-bind:value="searchText"
  v-on:input="searchText = $event.target.value"
>

当用在组件上时，v-model 则会这样：


<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>

所以你在组件上使用你必须手动$emit input时间然后把你想要双向绑定的值当做参数传给$emit函数

$emit('input', $event.target.value)

然后v-model就能在组件上正常工作了

