https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-camelCase-vs-kebab-case

HTML 中的 attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名：


传入一个对象的所有 property

如果你想要将一个对象的所有 property 都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。例如，对于一个给定的对象 post：

post: {
  id: 1,
  title: 'My Journey with Vue'
}

<blog-post v-bind="post"></blog-post>

<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>