一般来说 只有post请求才会在请求头中指定Content-type之一字段
1.application/x-www-form-urlencoded
这是最常用的 
一般用于表单提交，他把所有的参数按照key=value&key2=value2进行编码，key和value都进行了转码
比如
renewalStatus=10&currentPageNo=1&pageSize=20
2.application/json
请求参数会被序列化成json
比如
{"renewalStatus":"10","currentPageNo":1,"pageSize":20}
3.multipart/form-data
一般用于文件上传 
使用方法:
let formData = new FormData()
formData.append('file', event.target.files[0])
formData就是参数

application/json和application/x-www-form-urlencoded参数可以在拦截器里方便的使用qs.stringify()和qs.parse()进行转换
