1.Props/$emit
业务开发中比较常用的方式
Props父组件传参给子组件
$emit 调用父组件方法

2.$emit/$on

使用EventBus
可以在main.js中定义全局EventBus
Vue.prototype.$EventBus = new Vue()
this.$EventBus.$on('msg',(a)=>{
  console.log('msg')
  console.log(a)
})
this.$EventBus.$emit('msg','我是hmw')

3.vuex
Vuex原理：全局的beforeCreate的Mixin
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })


4.持久存储(localStorage)
是人都会用吧

5.$attrs/$listeners
$attrs 
包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

$listeners
包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
组件封装时非常有用
例如：子组件需要根据条件判断渲染哪个孙组件

https://cn.vuejs.org/v2/api/#vm-attrs

6.provide/inject
https://cn.vuejs.org/v2/api/#provide-inject
这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

父组件:
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  provide: {
    foo: 'bar'
  },
  data(){
    return{
      hmw: 'hhh'
    }
  },
  mounted(){
    console.log('this.$EventBus')
    console.log(this.$EventBus)
    this.$EventBus.$on('msg',(a)=>{
      console.log('msg')
      console.log(a)
    })
  },
  methods:{
    test(){
      console.log('test')
    }
  }
}
export default {
  name: "hl2",
  data() {
    return {
    }
  },
  inject:['foo'],
  mounted(){
    console.log('this.foo')
    console.log(this.foo)
    setTimeout(()=>{
      this.$EventBus.$emit('msg','我是hmw')
    })
    console.log('this.')
    console.log(this.$attrs)
  }
}

使用provide/inject 可以方便的从顶层组件传入底层组件


7.$parent / $children与 ref

获取VM示例直接调用
this.$parent.xxx