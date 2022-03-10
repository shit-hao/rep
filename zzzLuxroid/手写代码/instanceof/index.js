Function.prototype.myInstanceOf = function(left,right){
  if(left.__proto__ === null){
    console.log('no')
    console.log(no)
  }else if(left.__proto__ === right.prototype){
    console.log('is')
    console.log(is)
  }else{
    myInstanceOf(left.__proto__, right)
  }
}