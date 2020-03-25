vm.$mount是Vue的手动挂载
通常用于一些需要判断的业务场景
一般用来挂载提示框等
https://cn.vuejs.org/v2/api/#vm-mount
如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。

如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
vm.$mount( [elementOrSelector] )
这个方法会创建并挂载到 elementOrSelector (会替换 elementOrSelector)
所以很多场景你都可以忽略这个参数 并且手动使用appendChild挂载 
具体'文档之外的的元素'是什么,这个还不清楚