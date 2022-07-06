function JiSheng(son,parent) {
  var clone = Object.create(parent.prototype);//创建对象
  son.prototype = clone;      //指定对象
  clone.constructor = son;     //增强对象
}
function Parent(name){
  console.log('12')
  this.name = name;
  this.type = ['JS','HTML','CSS'];
}
Parent.prototype.Say=function(){
  console.log(this.name);
}
function Son(name){
  Parent.call(this,name);
}
JiSheng(Son,Parent);
son1 = new Son('张三');
son2 = new Son('李四');
son1.type.push('VUE');
son2.type.push('PHP');
console.log(son1.type);//['JS','HTML','CSS','VUE']
console.log(son2.type);//['JS','HTML','CSS','PHP']
son1.Say();//张三
son2.Say();//李四
