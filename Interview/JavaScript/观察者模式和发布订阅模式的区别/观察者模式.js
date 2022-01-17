// 观察者
class Observer {
    constructor() {

    }
    update(val) {
        console.log('new Val',val)
    }
}
// 观察者列表可要可不要
class ObserverList {
    constructor() {
        this.observerList = []
    }
    add(observer) {
        return this.observerList.push(observer);
    }
    remove(observer) {
        this.observerList = this.observerList.filter(ob => ob !== observer);
    }
    count() {
        return this.observerList.length;
    }
    get(index) {
        return this.observerList[index];
    }
}
// 目标
class Subject {
    constructor() {
        this.observers = new ObserverList();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.remove(observer);
    }
    notify(...args) {
        let obCount = this.observers.count();
        for (let index = 0; index < obCount; index++) {
            this.observers.get(index).update(...args);
        }
    }
}

let sub = new Subject() // 新增目标
let ob1 = new Observer()
sub.addObserver(ob1)
sub.notify([1,2,3])

//2021
// Subject 对象
function Subject(){
    this.observers = [];
  }
  Subject.prototype = {
    add(observer){  // 添加
      this.observers.push(observer);
    },
    notify(){  // 通知
      var observers = this.observers;
      for(var i = 0;i < observers.length;i++){
        observers[i].update();
      }
    },
    remove(observer){  // 删除
      var observers = this.observers;
      for(var i = 0;i < observers.length;i++){
        if(observers[i] === observer){
          observers.splice(i,1);
        }
      }
    },
  }
  
  // Observer 对象
  function Observer(name){
    this.name = name;
  }
  Observer.prototype = {
    update(){  // 更新
      console.log('my name is '+this.name);
    }
  }
  
  var sub = new Subject();
  var obs1 = new Observer('ttsy1');
  var obs2 = new Observer('ttsy2');
  sub.add(obs1);
  sub.add(obs2);
  sub.notify();  //my name is ttsy1、my name is ttsy2
  