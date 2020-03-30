
https://www.jianshu.com/p/8d8f9aa4b033
https://zhuanlan.zhihu.com/p/25883536
https://juejin.im/post/59db6e7af265da431f4a02ef

React合成事件一套机制：React并不是将click事件直接绑定在dom上面，而是采用事件冒泡的形式冒泡到document上面，
然后React将事件封装给正式的函数处理运行和处理。


要说react的合成事件
先了解一下原生事件的事件流
原生事件的事件流分为3个阶段

捕获阶段 window —> document —> boy —> button
目标阶段 具体元素已经捕获事件。之后事件开始想根节点冒泡。
冒泡阶段 button —> body —> document —> window

使用addEventListener函数在事件流的的不同阶段监听事件。
DOMEle.addEventListener(‘事件名称’,handleFn,Boolean);
此处第三个参数Boolean即代表监听事件的阶段；
为true时，在在捕获阶段监听事件，执行逻辑处理；
为false时，在冒泡阶段监听事件，执行逻辑处理


如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React为了避免这类DOM事件滥用，
同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。

如果react事件绑定在了真实DOM节点上，一个节点同事有多个事件时，
页面的响应和内存的占用会受到很大的影响。因此SyntheticEvent作为
中间层出现了。
事件没有在目标对象上绑定，而是在document上监听所支持的所有事件，当事件发生并冒泡至document时，react将事件内容封装并叫由真正的处理函数运行。


React合成事件理解
如果DOM上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React为了避免这类DOM事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。

1.当用户在为onClick添加函数时，React并没有将Click事件绑定在DOM上面。
2.而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装交给中间层SyntheticEvent（负责所有事件合成）
3.所以当事件触发的时候，对使用统一的分发函数dispatchEvent将指定函数执行。



小计： target和currentTarget的区别
target是真正发生点击的dom
currentTarget是绑定事件监听的dom