一个优雅使用router的插件
不使用的话需要手动在app.use内声明式的判断
$ npm install koa-router --save
首先，使用 require() 引入 koa-router ，并且对其实例化（支持传递参数），然后使用获取到的路由实例 router 设置一个路径，将 '/' 匹配到相应逻辑，返回一段HTML 。接着还需要分别调用 router.routes() 和 router.allowedMethods() 来得到两个中间件，并且调用 app.use() 使用这两个中间件：

Koa-router 请求方式： get 、 put 、 post 、 patch 、 delete 、 del ，而使用方法就是 router.方式() ，比如 router.get() 和 router.post() 。而 router.all() 会匹配所有的请求方法。

从请求参数取值
有些时候需要从请求URL上获取特定参数，主要分为两类： params 和 query 。 这两种参数获取的方式如下

router.get('/:category/:title', (ctx, next) => {
  console.log(ctx.params);
  // => { category: 'programming', title: 'how-to-node' }
})

router.get("/users", async (ctx) => {
    console.log('查询参数', ctx.query);
    ctx.body = '获取用户列表';
})

router 还支持使用中间件，并且可以针对特定的URL或者多个URL使用中间件
// 先后设置两个中间件
router
  .use(session())
  .use(authorize());

// 给指定地址使用中间件
router.use('/users', userAuth());

// 给数组里面的地址使用中间件
router.use(['/users', '/admin'], userAuth());

app.use(router.routes());

设置路由前缀
可以通过调用 router.prefix(prefix) 来设置路由的前缀，也可以通过实例化路由的时候传递参数设置路由的前缀，比如在 RESTful 接口里面，往往会为接口设置一个 api 前缀，如：

router.prefix('/api')

// 或者
const router = new Router({
   prefix: '/api' 
})


