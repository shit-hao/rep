class PubSub {
    constructor() {
        this.subscribers = {}
    }
    subscribe(type, fn) {
        if (!Object.prototype.hasOwnProperty.call(this.subscribers, type)) {
          this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    }
    unsubscribe(type, fn) {
        let listeners = this.subscribers[type];
        if (!listeners || !listeners.length) return;
        this.subscribers[type] = listeners.filter(v => v !== fn);
    }
    publish(type, ...args) {
        let listeners = this.subscribers[type];
        if (!listeners || !listeners.length) return;
        listeners.forEach(fn => fn(...args));        
    }
}

let ob = new PubSub();
ob.subscribe('add', (val) => console.log(val));
ob.subscribe('add', (val) => console.log(val));
ob.publish('add', 1);

// 2021
const pubSub = {
    list:{},
    subscribe(key,fn){  // 订阅
      if (!this.list[key]) {
        this.list[key] = [];
      }
      this.list[key].push(fn);
    },
    publish(){  // 发布
      const arg = arguments;
      const key = Array.prototype.shift.call(arg);
      const fns = this.list[key];
  
      if(!fns || fns.length<=0) return false;
  
      for(var i=0,len=fns.length;i<len;i++){
        fns[i].apply(this, arg);
      }
    },
    unSubscribe(key) {  // 取消订阅
      delete this.list[key];
    }
  };
  
  // 进行订阅
  pubSub.subscribe('name', (name) => {
    console.log('your name is ' + name);
  });
  pubSub.subscribe('sex', (sex) => {
    console.log('your sex is ' + sex);
  });
  // 进行发布
  pubSub.publish('name', 'ttsy1');  // your name is ttsy1
  pubSub.publish('sex', 'male');  // your sex is male
  