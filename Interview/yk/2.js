// 看Element-ui源码
// https://github.com/ElemeFE/element



// Element-ui库分为2种类型 
// 一个类型是样式组件 比如Table等
// 使用Vue.component(component.name, component);进行全局挂载


// 还有一个类型挂载在Vue.protoType上
// 比如$confirm,$notify,$alert等 
// 这种组件的实现较为复杂
// 可以看rep的Vue.$mount
// 主流程就是通过Vue.extend()生成一个Vue实例的构造器
// 然后new con()生成实例 然后使用实例.$mount挂载,导入实例
// 还有一个参数和业务逻辑实现的细节