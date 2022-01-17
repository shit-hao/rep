EventEmitter Node 中的概念 和发布订阅模式类似

function EventEmitter (){
  this.listener = {}
}

EventEmitter.prototype.on = function(type,fn){
  if(!this.listener[type]){
    !this.listener[type] = []
  } else {
    this.listener[type].push(fn)
  }
}

EventEmitter.prototype.emit = function(type, ...args)=>{
  this.listener[type].forEach((item,index)=>{
    item(...args)
  })
}

EventEmitter.prototype.off = function(type, fn)=>{
  if(this.listener[type]){
    this.listener[type].splice(this.listener[type].findIndex((item)=> item === fn),1)
  }else{
    console.warn('.....')
  }
}