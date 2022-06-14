# Refs

ref

接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

如果将对象分配为 ref 值，则它将被 reactive 函数处理为深层的响应式对象。

unref

如果参数是一个 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 的语法糖函数。

#toRef
可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。

const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3

当你要将 prop 的 ref 传递给复合函数时，toRef 很有用：

export default {
  setup(props) {
    useSomeFeature(toRef(props, 'foo'))
  }
}

即使源 property 不存在，toRef 也会返回一个可用的 ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs 处理

toRefs

将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref。

const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)
/*
stateAsRefs 的类型:

{
  foo: Ref<number>,
  bar: Ref<number>
}
*/

// ref 和原始 property 已经“链接”起来了
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3

当从组合式函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应性的情况下对返回的对象进行解构/展开：

function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2
  })

  // 操作 state 的逻辑

  // 返回时转换为ref
  return toRefs(state)
}

export default {
  setup() {
    // 可以在不失去响应性的情况下解构
    const { foo, bar } = useFeatureX()

    return {
      foo,
      bar
    }
  }
}

#watchEffect

为了根据响应式状态自动应用和重新应用副作用，我们可以使用 watchEffect 函数。它立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。

为什么与 watch 不同？
那么，既然已经有了 watch 方法，为什么这个新的 watchEffect 方法还会存在呢?

有一些关键的区别：

watchEffect 将在方法的任何依赖项发生更改时运行，watch 跟踪一个或多个特定的响应性属性，并且仅在该属性发生更改时运行。
默认情况下，watch 是惰性的，因此仅当依赖项更改时才会触发。watchEffect 在创建组件后立即运行，然后跟踪依赖关系。
但是，我们可以为 watch 传递一个 immediate 属性，使其在初始化时运行。

#Ref 解包
当 ref 作为渲染上下文 (从 setup() 中返回的对象) 上的 property 返回并可以在模板中被访问时，它将自动浅层次解包内部值。只有访问嵌套的 ref 时需要在模板中添加 .value：
<template>
  <div>
    <span>{{ count }}</span>
    <button @click="count ++">Increment count</button>
    <button @click="nested.count.value ++">Nested Increment count</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const count = ref(0)
      return {
        count,

        nested: {
          count
        }
      }
    }
  }
</script>