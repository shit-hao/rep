// async function 用来定义一个返回 AsyncFunction 对象的异步函数。
// 异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果。
// 如果你在代码中使用了异步函数，就会发现它的语法和结构会更像是标准的同步函数。


// await 会把后面的函数包成一个promise 并且执行他 把await后的代码放进then

function resolveAfter2Seconds() {
    return new Promise((resolve,rej) => {
      setTimeout(() => {
        rej('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    console.log(123)
    // expected output: 'resolved'
  }
  
  asyncCall();

  //扩展面试题

  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async1();
new Promise
    (function (resolve) {
        console.log('promise1')
        resolve();
    })
    .then(function () {
        console.log('promise2')
    })
console.log('script end')

//运行结果
script start
async1 start
async2
promise1
script end
async1 end
promise2
undefined
setTimeout