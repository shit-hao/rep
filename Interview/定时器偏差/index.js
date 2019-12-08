// 猿辅导问了这个问题 答的挺好的 不知道是不是因为这个问题挂的 总结一下
//https://juejin.im/post/5cfc9d266fb9a07edb3939ea

先理解下setTimeOut和setInterval的区别
由于EventLoop和js单线程的原因
所以前端的定时器并没有那么准确 因为都是在下一次时间循环中才执行
产生误差的几个原因
1.EventLoop
2.setInterval内部的逻辑太多 执行的时间超出了等待的时间

ps 现代浏览器其实已经内置了修正的逻辑 在谷歌和火狐上测试

var startTime = Date.now();
setInterval(function() {
  console.log((Date.now() - startTime) + 'ms elapsed');
}, 1000);

1003ms elapsed
VM242:4 2002ms elapsed
VM242:4 3005ms elapsed
VM242:4 4004ms elapsed
VM242:4 5002ms elapsed
VM242:4 6006ms elapsed
VM242:4 7002ms elapsed
VM242:4 8006ms elapsed
VM242:4 9006ms elapsed
VM242:4 10006ms elapsed
VM242:4 11004ms elapsed
VM242:4 12006ms elapsed
VM242:4 13006ms elapsed
VM242:4 14003ms elapsed
VM242:4 15006ms elapsed
VM242:4 16003ms elapsed
VM242:4 17002ms elapsed
VM242:4 18005ms elapsed
VM242:4 19002ms elapsed
VM242:4 20002ms elapsed
VM242:4 21002ms elapsed
VM242:4 22006ms elapsed
VM242:4 23003ms elapsed
VM242:4 24006ms elapsed
VM242:4 25006ms elapsed
VM242:4 26002ms elapsed
VM242:4 27003ms elapsed

可以看到了浏览器内部也在控制这个时间,并没有让时间偏差变的越来越大(只控制了setInterval的) 如果你是递归setTimeOut的话还是需要解决这个问题

虽然如此,但是还是看看怎么解决这个误差,解决是解决不了的对于前端来说，只能将这个误差努力变小

1.动态计算时差
思路 使用递归的调用setTimeout来达到定时器的效果 但是时间是事实计算出来的
code:

let time = Date.now()
let count = 0
let i = 100000000

function exec(){
    //业务逻辑
    count++
    // for (let index = 0; index < i; index++) {
        
    // }
    let newStep = (Date.now() - time) % (count * 1000)
    console.log(newStep)
    console.log('误差时间',newStep)
    // console.log('下次时间',1000 - newStep)
    // setTimeout(exec, 1000 - newStep);
    // setTimeout(() => {
    //     exec()
    // }, 1*1000);
}

setInterval(() => {
    exec()
}, 1*1000);

这2个函数的区别还是有的 
https://img-blog.csdnimg.cn/20190501174455615.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQwNzE0MjY=,size_16,color_FFFFFF,t_70
见图片地址
setTimeout是执行完自己的逻辑然后在等待time的时间 所以总时间 = 执行时间 + time
setInterval是等待时间就是最终的时间 time = 执行时间 + pending时间

那么这就有一个问题了 当执行时间大于time的话 会发生什么呢
那么这个time就不会生效了 js高程中有一部分话
当使用setInterval时,仅当(在队列中)没有该定时器的任何其他代码实例时,才将定时器代码添加到队列中,引用JavaScript高级程序设计第三版书中语句
当定时器代码执行时间(假如需要600ms才执行完)超过指定间隔(这里是200ms),
那么某些定时器代码就会被跳过(即后面的定时器代码不会被添加到队列中),
前一个定时器代码执行完毕后,队列中的定时器代码立刻执行,各定时器之间的代码执行没有间隔。这时，需要使用链式setTimeout。

https://www.jianshu.com/p/0ad05e325f9b

https://www.mybj123.com/583.html

setInterval还有一个回调堆积的问题
和上面一样就是当time > 执行时间 + pending时间 会每隔 X毫秒执行函数一次由于这个特性，当被阻塞时,仍然回去发布循环指令，这就导致cb被堆积起来


二者的优缺点 和业务场景
1.setTimeOut

2.setInterval
原则上来说要使用倒计时之类的需求还是应该使用setInterval因为他更精准，但是如果cb中有大量逻辑操作，并且我们的time很小时，我们就需要小心衡量了，
如果还是用setInterval就可能会带来time失效的问题，这时就应该使用setTimeOut递归代替setInterval

function sleep(time) {
    let startTime = window.performance.now();
    while (window.performance.now() - startTime < time) {}
  }

let count = 1;
let getTime = window.performance;
let startTime = getTime.now();

setInterval(function () {
  console.log(`第${count}次开始 ${getTime.now() - startTime}`); // 显示开始时间
  sleep(200); // 程序滞留500ms
  console.log(`第${count}次结束 ${getTime.now() - startTime}`); // 显示结束时间
  count += 1;
}, 300); // 300ms间隔