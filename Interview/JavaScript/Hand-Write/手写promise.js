// https://juejin.im/post/5b2f02cd5188252b937548ab
// 由于new Promise((resolve, reject)=>{})，所以传入一个参数（函数），规范里叫他executor，传入就执行。
// Promise存在三个状态（state）pending、fulfilled、rejected
// pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）
// 成功时，不可转为其他状态，且必须有一个不可改变的值（value）
// 失败时，不可转为其他状态，且必须有一个不可改变的原因（reason）
// new Promise((resolve, reject)=>{resolve(value)}) resolve为成功，接收参数value，状态改变为fulfilled，不可再次改变。
// new Promise((resolve, reject)=>{reject(reason)}) reject为失败，接收参数reason，状态改变为rejected，不可再次改变。
// 若是executor函数报错 直接执行reject();

class Promise {
    constructor(executor) {
        this.state = 'pending'; // 初始化state为等待态
        this.value = undefined; // 成功的值
        this.reason = undefined; // 失败的原因

        this.onResolvedCallbacks = []; // 成功存放的数组

        this.onRejectedCallbacks = []; // 失败存放法数组

        let resolve = value => { // state改变,resolve调用就会失败
            if (this.state === 'pending') {
                this.state = 'fulfilled'; // resolve调用后，state转化为成功态
                this.value = value; // 储存成功的值
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        let reject = reason => {
            if (this.state === 'pending') { // state改变,reject调用就会失败
                this.state = 'rejected'; // reject调用后，state转化为失败态
                this.reason = reason; // 储存失败的原因
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };

        try { // 如果executor执行报错，直接执行reject
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onFulfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => { // 声明返回的promise2
            if (this.state === 'fulfilled') {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject); // resolvePromise函数，处理自己return的promise和默认的promise2的关系
            };
            if (this.state === 'rejected') {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
            };
            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                })
                this.onRejectedCallbacks.push(() => {
                    let x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                })
            }
        });
        return promise2; // 返回promise，完成链式
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 循环引用报错
    if (x === promise2) {
        // reject报错
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    // 防止多次调用
    let called;
    // x不是null 且x是对象或者函数
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            // A+规定，声明then = x的then方法
            let then = x.then;
            // 如果then是函数，就默认是promise了
            if (typeof then === 'function') {
                // 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
                then.call(x, y => {
                    // 成功和失败只能调用一个
                    if (called) return;
                    called = true;
                    // resolve的结果依旧是promise 那就继续解析
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    // 成功和失败只能调用一个
                    if (called) return;
                    called = true;
                    reject(err); // 失败了就失败了
                })
            } else {
                resolve(x); // 直接成功即可
            }
        } catch (e) {
            // 也属于失败
            if (called) return;
            called = true;
            // 取then出错了那就不要在继续执行了
            reject(e);
        }
    } else {
        resolve(x);
    }
}

//reject方法
Promise.reject = function(val){
    return new Promise((resolve,reject)=>{
      reject(val)
    });
  }
  //race方法 
  Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++){
        promises[i].then(resolve,reject)
      };
    })
  }
  //all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
  Promise.all = function(promises){
    let arr = [];
    let i = 0;
    function processData(index,data){
      arr[index] = data;
      i++;
      if(i == promises.length){
        resolve(arr);
      };
    };
    return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++){
        promises[i].then(data=>{
          processData(i,data);
        },reject);
      };
    });
  }