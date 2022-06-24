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

Function.prototype.myInstanceOf = function(left,right){
  let l = left.__proto__
  while(true){
    if(l === right.prototype){
      console.log('is')
      break
    } else if( l=== null){
      console.log('no')
    }
    l = left.__proto__
  }
}


function myNew(fn){
  let obj = {}
  obj.__proto__ = fn.prototype
  fn.call(obk)
}