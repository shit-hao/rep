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