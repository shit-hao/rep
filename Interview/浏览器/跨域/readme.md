跨域是浏览器的安全限制
当2个URL
域名不同(顶级域名)
端口不同
协议不同
即认为跨域

一般使用CORS或者JSONP处理跨域,postMessage(iframe)， nginx转发

http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html
举例来说，http://www.example.com/dir/page.html这个网址，协议是http://，域名是www.example.com，端口是80（默认端口可以省略）。它的同源情况如下。
http://www.example.com/dir2/other.html：同源
http://example.com/dir/other.html：不同源（域名不同）
http://v2.www.example.com/dir/other.html：不同源（域名不同）
http://www.example.com:81/dir/other.html：不同源（端口不同）
目的为了用户的安全
限制:
（1） Cookie、LocalStorage 和 IndexDB 无法读取。

（2） DOM 无法获得。

（3） AJAX 请求不能发送。