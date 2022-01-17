setup 组件选项
新的 setup 选项在组件创建之前执行，一旦 props 被解析，就将作为组合式 API 的入口。
WARNING

在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。
setup 选项是一个接收 props 和 context 的函数，我们将在之后进行讨论。此外，我们将 setup 返回的所有内容都暴露给组件的其余部分 (计算属性、方法、生命周期钩子等等) 以及组件的模板

ref

ref 接收参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值：
import { ref } from 'vue'
const counter = ref(0)
console.log(counter) // { value: 0 }
console.log(counter.value) // 0
counter.value++
console.log(counter.value) // 1
将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的。这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值而非引用传递的：

在任何值周围都有一个封装对象，这样我们就可以在整个应用中安全地传递它，而不必担心在某个地方失去它的响应性。


对于其他的逻辑关注点我们也可以这样做，但是你可能已经在问这个问题了——这不就是把代码移到 setup 选项并使它变得非常大吗？嗯，确实是这样的
？

更好的做组件逻辑解耦，代码更加优雅，代码更加易读，好维护
