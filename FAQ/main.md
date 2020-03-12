====================加油====================
1.
    技术无关
    1.1 开场
    Q: 介绍一下自己?
    A: 面试官好,我的名字叫郝明旺,我是18年的毕业生,专业是软件工程,目前就职于瓜子二手车
    主要在瓜子负责的是一些EHR和一些IM项目,比如公司的离职系统包括后面重做的新的离职系统，和'我的信息'提供给公司员工增删改查一些个人信息比如,银行卡信息,证件信息,然后还参与了公司内部的类似企业微信的一个IM工具,呱呱。这个IM有2个版本一个Web端的使用React，一个Win和Mac版的使用Electron 这个系统现在是我在负责，并且也参与了一部分公司m站的线上化售车业务,还有一些比较常见的管理系统,比如公司内的仓储管理和提供给一线员工用于拍摄上传车源视频的一些系统,然后还有一个公司内部的单点登录系统,然后在瓜子4周年的时候,做了一个公司的庆祝活动页。和一些呱呱APP的附属H5
    1.2
    Q: 你觉的XX项目最大的挑战是什么(可以聊某一个,一下举例)
    呱呱PC版(Electron)
    A:因为这个项目是Electron的,是大概18年末的时候开始弄的,那时候我差不多才毕业半年,所以当时觉得还是很有挑战的,
    1.挑战的第一个大点就是这个技术栈吧 Electron,他和传统前端项目最大的区别可能就是可以使用Node.js,所以Electron+Node.js是一个挑战吧
    2.第二个大点的话就是业务吧,
        2.1 本地存储(数据持久化), 因为我们可以传一些文件,在Web上是不能实现'在文件夹中打开'这个功能的,所以我们用了Node.js的一些存储API在本地维护了几份文件
            比如: 个人信息，文件下载信息(路劲),设置信息。
        2.2 在线更新(静默更新,强更)。。
            其实Electron本身提供了更新的API和一些CallBack,我们只要配置拉取更新的接口地址,并且根据他的约定给Electron一些版本信息,然后
        2.3 多版本兼容(Mac,Win)
            一开始这个是只有Mac版本的,后面上Win的话就需要考虑一些系统上的差异,比如Bug,能拖不能点的bug,使用perload解决windows上比较丑的三个传统按键
        2.4 作为平台,提供Electron的能力给呱呱上的附属服务
            使用IPC服务可以在APP内注册方法，提供给附属的Web应用使用
    呱呱(Web版)(最好别说,了解不多)
    这个的主要挑战是业务的处理，因为消息类型很多，所以需要对每种消息类型做单独处理,使用protobuf通信,服务端羸弱,使用IndexDB做所有消息和人员信息的存储。
    线上化项目(最好别说,了解不多)
    然后其他的就是一些就都是一些普通的Vue全家桶项目

2.
    技术问题(随想随写)
    2.1 缓存
        缓存分为强缓存和协商缓存
        2.1.1强缓存：
            主要用户缓存一些不经常改变的静态资源,主要是一些静态资源文件,比如HTML，CSS，JS等，比如百度的首页等等。。
            可以通过Cache-control和Expire控制(前者优先级更高http1.1)
            主要由服务端控制
            强缓存在客户端有两种表现形式：
                1.from memory cache
                2.from disk cache
                图片等媒体文件一般存放在memory cache
                css,js会根据文件大小的不同选择不同的存储位置
                尺寸大的浏览器会优先存在disk,小的会放memory
                隐私模式下的缓存都在memory内
                也跟内存和硬盘的使用率相关
            强缓存被服务器的响应头所控制
        2.1.2 协商缓存
            1.先说前端能控制的协商缓存
                1.1 利用webpack的打包的hash构建模式,在生成的静态文件后
                    hash有3中构建模式
                        hash:
                            跟整个项目的构建相关，构建生成的文件hash值都是一样的，只要项目里有文件更改，整个项目构建的hash值都会更改。
                        chunkhash:
                            根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的hash值。
                        contenthash:
                            由文件内容产生的hash值，内容不同产生的contenthash值也不一样。
            2.服务端的协商缓存方式
                1.ETag计算 
                    ETag 服务器生成的资源的唯一标示,用来标记资源
                    If-None-Match： 再次请求服务器时，浏览器的请求报文头部会包含此字段，后面的值为在缓存中获取的标识。服务器接收到次报文后发现If-None-Match则与被请求资源的唯一标识进行对比。
                        比较结果不同说明资源修改过返回200，并返回新的资源文件
                        相同返回304
                2.Last-Modified
                    Last-Modified服务器在响应请求时，会告诉浏览器资源的最后修改时间。
                    if-Modified-Since：浏览器再次请求服务器的时候，请求头会包含此字段，后面跟着在缓存中获得的最后修改时间。服务端收到此请求头发现有if-Modified-Since，则与被请求资源的最后修改时间进行对比，如果一致则返回304和响应报文头，浏览器只需要从缓存中获取信息即可。
                且Etag的优先级高于Last-Modified
            
3.Vue
    Q:你用过哪些组件库,组件库为什么import就能用了
    A:
        用Element-ui举例：
        引入之后使用Vue.use()方法可以调用组件内的install,并且会传入Vue实例作为参数
        https://cn.vuejs.org/v2/guide/plugins.html#%E4%BD%BF%E7%94%A8%E6%8F%92%E4%BB%B6
        Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
        Install的插件有唯一性,安装之前会检查是否存在，不存在才安装
        `
        function initUse (Vue) {
            Vue.use = function (plugin) {
                var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
                if (installedPlugins.indexOf(plugin) > -1) {
                return this
                }

                // additional parameters
                var args = toArray(arguments, 1);
                args.unshift(this);
                if (typeof plugin.install === 'function') {
                    plugin.install.apply(plugin, args);
                } else if (typeof plugin === 'function') {
                    plugin.apply(null, args);
                }
                installedPlugins.push(plugin);
                return this
            };
        }
        `
        plugin可以是一个对象,也可以是一个方法,Vue做了健壮性处理
        使用Vue.component(Alert.name, Alert);声明全局组件,局部组件就是我们平常写的组件,使用import导入使用















====================加油====================