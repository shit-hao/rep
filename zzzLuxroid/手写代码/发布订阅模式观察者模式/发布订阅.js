function pubsub(){
  this.subs = {}
}

pubsub.prototype.sub = function(type, fn){
  if(!this.subs[type]){
    this.subs[type] = []
  }
  
  this.subs[type].push(fn)
}

pubsub.prototype.unsub = function(type, fn){
  this.subs[type] = this.subs[type].filter((item)=> item !== fn)
}

pubsub.prototype.notify = function(type, ...args){
  this.subs[type].forEach(item => {
    item(...args)
  });
}

let ob = new pubsub();
ob.sub('add', (val) => console.log(2));
ob.sub('add', (val) => console.log(val));
ob.notify('add', 1);



