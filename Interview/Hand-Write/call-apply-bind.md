首先解释一下这3个方法的用法
1. call(context,arg1,arg2....)
call方法可以让调用的方法在context上下文下运行
2. apply(context, [args])
和call方法类似，只不过参数是一个数组
3. bind(context,arg1,arg2....)
上述2个方法都是直接执行在context上下文直接执行这个函数，bind不会，bind会返回已经绑定好this的这个函数

其实这3个方法都依赖一个绑定this的逻辑，只不过最后实现的效果不一样

使用实例
1. 
        let obj = {
            name: "一个"
        }

        function allName(firstName, lastName) {
            console.log(this)
            console.log(`我的全名是“${firstName}${this.name}${lastName}”`)
        }
        // 很明显此时allName函数是没有name属性的
        allName('我是', '前端') //我的全名是“我是前端”  this指向window
        allName.call(obj, '我是', '前端') //我的全名是“我是一个前端” this指向obj
2. 
        let obj = {
            name: "一个"
        }

        function allName(firstName, lastName, flag) {
            console.log(this)
            console.log(`我的全名是"${firstName}${this.name}${lastName}"我的座右铭是"${flag}"`)
        }
        allName.bind(obj) //不会执行
        let fn = allName.bind(obj)
        fn('我是', '前端', '好好学习天天向上')

        // 也可以这样用，参数可以分开传。bind后的函数参数默认排列在原函数参数后边
        fn = allName.bind(obj, "你是")
        fn('前端', '好好学习天天向上')
3. 
用法类似

没有context this指向window

ps:
Array.prototype.slice(this),也可以使用该方法将类数组转为数组
go: Array.prototype.slice.call(arguments)

所有的函数都有上面3个方法,因为类数组是个对象,所以需要使用call来调用slice方法

hand-write
手写其实很简单,根据this绑定原理，我们只需要在使用的function，绑定传进来的context即可，怎么绑定呢？即：context.function
1. call
Function.prototype.myCall = function (context){
    let arg = [...arguments].slice(1)
    context.fn = this
    return context.fn(...arg)
    delete context.fn
}
简单的实现就完事了，试一下，没问题，原则就是让这个function成为context上下文的一个对象，使用后删除即可,
还有一个隐藏的问题fn可能在context上已经声明过了，可以用Symbol解决这个问题，这里不深究
2. apply
实现了一个其他的都好说，围绕这this的绑定原理就ok
Function.prototype.myApply = function(context){
    let arg = [...arguments].slice(1,2)
    context.fn = this
    return context.fn(...arg)
    delete context.fn
}
只是参数有差异
3. bind
Function.prototype.myBind = function(context){
    let arg = [...arguments].slice(1)
    let self = this //其实上面的都可以使用这种方法，语义会更简洁
    return function(){ //大量操作this，最好不要使用arrow fn 会丢失this引用带来一堆问题
        let newArg = [...arguments]
        let a = arg.concat(newArg)
        self.apply(context,a)//并不是闭包是一个函数柯里化
    }
}


bind Polyfill
Function.prototype.mybind = function(context, ...args) {
    const f = this;
    const fpro = function() {};
    const fBound = function(..._arg) {
        // fpro.prototype.isPrototypeOf(this)  判断是否是 new 调用的 fBound
        return f.apply(fpro.prototype.isPrototypeOf(this)
                ? this
                : context,
                [...args, ..._arg]);
    };
    if (this.prototype) {
        fpro.prototype = this.prototype;
    }
    fBound.prototype = new fpro();
    return fBound;
};

bind只是柯里化的一种应用场景,这种应用场景是固定的,柯里化可以拓展出很多种玩法。




