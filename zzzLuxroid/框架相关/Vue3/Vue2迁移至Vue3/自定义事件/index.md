前情提要

事件名
<my-component @my-event="doSomething"></my-component>

this.$emit('myEvent')

定义自定义事件
可以通过 emits 选项在组件上定义发出的事件。
app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
当在 emits 选项中定义了原生事件 (如 click) 时，将使用组件中的事件替代原生事件侦听器。


#验证抛出的事件

与 prop 类型验证类似，如果使用对象语法而不是数组语法定义发出的事件，则可以对它进行验证。

要添加验证，请为事件分配一个函数，该函数接收传递给 $emit 调用的参数，并返回一个布尔值以指示事件是否有效。

app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证 submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
})


v-model 参数

<my-component v-model:title="bookTitle"></my-component>

app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})

多个v-model绑定

正如我们之前在 v-model 参数中所学的那样，通过利用以特定 prop 和事件为目标的能力，我们现在可以在单个组件实例上创建多个 v-model 绑定。
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>

app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
})

处理 v-model 修饰符

<div id="app">
  <my-component v-model.capitalize="myText"></my-component>
  {{ myText }}
</div>

const app = Vue.createApp({
  data() {
    return {
      myText: ''
    }
  }
})

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: `<input
    type="text"
    :value="modelValue"
    @input="emitValue">`
})

app.mount('#app')

对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"：
<my-component v-model:description.capitalize="myText"></my-component>

app.component('my-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: `
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  `,
  created() {
    console.log(this.descriptionModifiers) // { capitalize: true }
  }
})




