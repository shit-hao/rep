https://segmentfault.com/a/1190000015244759

因为HTTPS的S本身就是Secure的意思，现代浏览器最初会针对此类型的内容显示警告，以向用户表明此页面包含不安全的资源。但是即使显示警告，页面也已经加载，用户的安全仍然受到了威胁。所以没过多久，Chrome和Firefox就直接阻断掉了这类的请求

那什么是混合内容？

混合内容：初始 HTML 内容通过安全的 HTTPS 连接加载，但其他资源（例如，图像、视频、样式表、脚本）则通过不安全的 HTTP 连接加载[1]。因为页面通过 HTTPS 加载的初始请求是安全的，但是又加载了不安全的HTTP内容，因此称之为混合内容。

怎么发
img.src 普通get
script.src 会报错mixed content

或者自己的后端做一个代理请求