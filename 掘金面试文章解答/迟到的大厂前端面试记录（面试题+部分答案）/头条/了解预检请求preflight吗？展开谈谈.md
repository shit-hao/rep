一般请求分为简单请求和非简单请求
简单请求：
（1) 请求方法是以下三种方法之一：

HEAD
GET
POST
（2）HTTP的头信息不超出以下几种字段：

Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

超出的叫非简单请求 需要发一次预检请求判断服务器是否支持此类请求
http://www.ruanyifeng.com/blog/2016/04/cors.html

都会受到跨域的影响