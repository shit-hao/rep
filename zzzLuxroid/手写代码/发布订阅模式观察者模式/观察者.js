//  目标添加观察者 没有总线的概念
function Ob (fn){
  this.fn = fn
}

Ob.prototype.update = function(){
  this.fn()
}

function Subject(){
  this.obs = []
}

Subject.prototype.addOb = function(ob){
  this.obs.push(ob)
}

Subject.prototype.removeOb = function(ob){
  this.obs = this.obs.filter((item)=> item !== ob)
}

Subject.prototype.notify = function(){
  this.obs.forEach((item)=>{
    item.update()
  })
}

let sub = new Subject()
let ob1 = new Ob(()=>{console.log(1234)})

let ob2 = new Ob(()=>{console.log(2345)})

sub.addOb(ob1)
sub.addOb(ob2)

sub.notify()