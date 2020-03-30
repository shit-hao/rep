JSONP是一种处理跨域的方式
它主要利用的标签的src属性不会被浏览器做跨域限制

JSONP流程

前端首先在js代码中定义一个function A(data){}
然后使用一个script标签
<script src = 'xxxx?cb=A&paramxxx'></script>

将这个请求打到服务端，当服务端收到这个请求，既可以开始处理数据处理完成后返回 一段符合js语言格式的代码 比如 A({a:2,b:3})
这样就可以获取数据

栽在这个问题2次了
