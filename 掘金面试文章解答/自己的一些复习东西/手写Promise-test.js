// 新建 MyPromise.js

// 新建 MyPromise 类
class MyPromise {
  constructor(executor){
    // executor 是一个执行器，进入会立即执行
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.rescbs = []
    this.rejcbs = []

    this.res = (value)=>{
      if(this.status === 'pending'){
        this.status = 'fulFilled'
        this.value = value
        while(this.rescbs.length > 0){
          this.rescbs.shift()(this.value)
        }
      }
    }
    this.rej = (reason)=>{
      if(this.status === 'pending'){
        this.reason = reason
        this.status = 'onRejected'
        while(this.rejcbs.length > 0){
          this.rescbs.shift()(this.reason)
        }
      }
    }
    executor(this.res, this.rej)
  }
  then(fn){
    let promise2 = new MyPromise((res,rej)=>{
      if(this.status === 'pending'){
        this.rescbs.push(fn)
        this.rejcbs.push(fn)
      }
      if(this.status === 'onRejected'){
        fn(this.reason)
      }
      if(this.status === 'fulFilled'){
        const x = onFulfilled(this.value);
        resolvePromise(x, res, rej);
        // fn(this.value)
      }
    })
    return promise2
  }
  catch(fn){
    if(this.status === 'pending'){
      this.rejcbs.push(fn)
    }
    if(this.status === 'onRejected'){
      fn(this.reason)
    }
  }
}

function resolvePromise(x,res,rej) {
  if(x instanceof MyPromise){
    x.then((res,rej))
  } else {
    res(x)
  }
  
}

