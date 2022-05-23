https://v3.cn.vuejs.org/guide/migration/global-api.html#%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%E5%85%A8%E5%B1%80-api-createapp

单元测试（unit testing），是指对软件中的最小可测试单元进行检查和验证。简单来说，单元就是人为规定的最小的被测功能模块，可能是一个单一函数或方法、一个完整的组件或类。

#一个新的全局 API：createApp


https://v3.cn.vuejs.org/guide/migration/v-model.html
以下是对变化的总体概述：

非兼容：用于自定义组件时，v-model prop 和事件默认名称已更改：
prop：value -> modelValue；
事件：input -> update:modelValue；
非兼容：v-bind 的 .sync 修饰符和组件的 model 选项已移除，可在 v-model 上加一个参数代替；
新增：现在可以在同一个组件上使用多个 v-model 绑定；
新增：现在可以自定义 v-model 修饰符。
更多信息，请见下文。

3.x 版本中 v-if 总是优先于 v-for 生效。

v-bind合并

v-for 中的 Ref 数组

