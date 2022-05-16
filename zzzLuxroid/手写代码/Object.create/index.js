function _create(o){
  let fn = function(){}
  fn.prototype = o
  return new fn()
}