// 新建 MyPromise.js

// 新建 MyPromise 类

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.status = PENDING; //状态
    this.value = null; // 成功值
    this.reason = null; // 拒因
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    this.then = this.then.bind(this)
    this.catch = this.catch.bind(this)
    try {
      // 我的理解 then肯定不是同步执行的
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      console.log('resolve')
      this.value = value
      this.status = FULFILLED
      while (this.onFulfilledCallbacks.length > 0) {
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }
  reject(reson) {
    if (this.status === PENDING) {
      console.log('reject')
      this.reason = reson
      this.status = REJECTED
      while (this.onRejectedCallbacks.length > 0) {
        this.onRejectedCallbacks.shift()(reson)
      }
    }
  }
  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject)=>{
      if (this.status === FULFILLED) {
        let x = onFulfilled(this.value)
        resolvePromise(promise2, x, resolve, reject);
      } else if (this.status === REJECTED) {
        onRejected(this.reason)
      } else if (this.status === PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled)
      }
    })
    return promise2
  }
  catch() {

  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 如果相等了，说明return的是自己，抛出类型错误并返回
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if(x instanceof MyPromise){
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

module.exports = MyPromise;