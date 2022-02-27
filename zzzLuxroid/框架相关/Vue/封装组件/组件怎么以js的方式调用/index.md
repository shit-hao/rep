有许多组件以template的方式插入，但是如果组件内逻辑过多，或者使用过于频繁，这样就会让模板过于混乱

所以最好新建一个Vue示例，手动挂载

可以维护一个单例模式，单例模式的new是手机挂载，引入组件，使用new Vue ，render函数渲染
获得vm实例，然后调用vm.$mount即可 注意，vm.$mount内部几个函数返回的都是this，比如mountComponent,所以可以分开写
是没有问题的，并且可以通过注入Promise的形式使得this.$xxx变成thenable