被问住了 主要是

Watch
 



Computed




其实这俩在功能上是可以保持一致的  用Computed做到的Watch一样可以做到

在Vue的 template模板内（{{}}）是可以写一些简单的js表达式的很便利，如上直接计算 {{this.firstName + ' ' + this.lastName}}，因为在模版中放入太多声明式的逻辑会让模板本身过重，尤其当在页面中使用大量复杂的逻辑表达式处理数据时，会对页面的可维护性造成很大的影响，而 computed 的设计初衷也正是用于解决此类问题。

在一些简单计算上 Computed有一些性能优势(由于缓存)