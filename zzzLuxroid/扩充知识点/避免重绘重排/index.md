https://github.com/shfshanyue/Daily-Question/issues/472
另外，重排必定会造成重绘。以下是避免过多重拍重绘的方法

使用 DocumentFragment 进行 DOM 操作，不过现在原生操作很少也基本上用不到
CSS 样式尽量批量修改
避免使用 table 布局
为元素提前设置好高宽，不因多次渲染改变位置