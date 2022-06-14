#事件名

与组件和 prop 一样，事件名提供了自动的大小写转换。如果在子组件中触发一个以 camelCase (驼峰式命名) 命名的事件，你将可以在父组件中添加一个 kebab-case (短横线分隔命名) 的监听器。


this.$emit('myEvent')

<my-component @my-event="doSomething"></my-component>

与 props 的命名一样，当你使用 DOM 模板时，我们建议使用 kebab-case 事件监听器。如果你使用的是字符串模板，这个限制就不适用。

#定义自定义事件

可以通过 emits 选项在组件上定义发出的事件。

app.component('custom-form', {
  emits: ['inFocus', 'submit']
})

当在 emits 选项中定义了原生事件 (如 click) 时，将使用组件中的事件替代原生事件侦听器

TIP

建议定义所有发出的事件，以便更好地记录组件应该如何工作。

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

可以校验emit事件参数了

#v-model 参数

默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件。我们可以通过向 v-model 传递参数来修改这些名称：

<my-component v-model:title="bookTitle"></my-component>

在本例中，子组件将需要一个 title prop 并发出 update:title 事件来进行同步：

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

#多个 v-model 绑定

正如我们之前在 v-model 参数中所学的那样，通过利用以特定 prop 和事件为目标的能力，我们现在可以在单个组件实例上创建多个 v-model 绑定。

每个 v-model 将同步到不同的 prop，而不需要在组件中添加额外的选项：

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
  `
})

#处理 v-model 修饰符
当我们学习表单输入绑定时，我们看到 v-model 有内置修饰符——.trim、.number 和 .lazy。但是，在某些情况下，你可能还需要添加自己的自定义修饰符。

让我们创建一个示例自定义修饰符 capitalize，它将 v-model 绑定提供的字符串的第一个字母大写。

添加到组件 v-model 的修饰符将通过 modelModifiers prop 提供给组件。在下面的示例中，我们创建了一个组件，其中包含默认为空对象的 modelModifiers prop。

请注意，当组件的 created 生命周期钩子触发时，modelModifiers prop 会包含 capitalize，且其值为 true——因为 capitalize 被设置在了写为 v-model.capitalize="myText" 的 v-model 绑定上。

<my-component v-model.capitalize="myText"></my-component>

app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  template: `
    <input type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
  `,
  created() {
    console.log(this.modelModifiers) // { capitalize: true }
  }
})

现在我们已经设置了 prop，我们可以检查 modelModifiers 对象键并编写一个处理器来更改发出的值。在下面的代码中，每当 <input/> 元素触发 input 事件时，我们都将字符串大写。

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