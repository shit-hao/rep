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


update at 2022.06

https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E5%90%88%E5%BC%8F-api

通过创建 Vue 组件，我们可以将界面中重复的部分连同其功能一起提取为可重用的代码段。仅此一项就可以使我们的应用在可维护性和灵活性方面走得相当远。然而，我们的经验已经证明，光靠这一点可能并不够，尤其是当你的应用变得非常大的时候——想想几百个组件。处理这样的大型应用时，共享和重用代码变得尤为重要。


新的 setup 选项在组件被创建之前执行，一旦 props 被解析完成，它就将被作为组合式 API 的入口。

// src/components/UserRepositories.vue `setup` function
import { fetchUserRepositories } from '@/api/repositories'

// 在我们的组件内
setup (props) {
  let repositories = []
  const getUserRepositories = async () => {
    repositories = await fetchUserRepositories(props.user)
  }

  return {
    repositories,
    getUserRepositories // 返回的函数，它的行为与将其定义在 methods 选项中的行为相同
  }
}

个人理解 setup可以做为一个组件的初始化项目，不能使用this，可以return需要用到的属性和函数

注意：返回的变量是非响应式的

#带 ref 的响应式变量

ref 接收初始化参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值

import { ref } from 'vue'

const counter = ref(0)

注意：ref返回的是一个对象，

将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的。这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值而非引用传递的：

在任何值周围都有一个封装对象，这样我们就可以在整个应用中安全地传递它，而不必担心在某个地方失去它的响应性。

提示

换句话说，ref 为我们的值创建了一个响应式引用。在整个组合式 API 中会经常使用引用的概念。


组合式api有点像mixin，选项式api还在，在setup中都能实现选项式api的功能，有点像mixin

toRefs

对于其他的逻辑关注点我们也可以这样做，但是你可能已经在问这个问题了——这不就是把代码移到 setup 选项并使它变得非常大吗？嗯，确实是这样的。这就是为什么我们要在继续其他任务之前，我们首先要将上述代码提取到一个独立的组合式函数中。让我们从创建 useUserRepositories 函数开始：
