function A() {
  console.log('this')
  console.log(this)
  this.hmw = 'aaa'
  if(this instanceof A){
    
  }else{
    return new A()
  }
}
new A()

function A(params) {
  console.log('this')
  console.log(this)
}