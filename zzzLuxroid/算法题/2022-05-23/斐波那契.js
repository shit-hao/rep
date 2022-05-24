// 尾调用优化


function calc(count, last, after){
  if(count === 0){
    return after
  }
  return calc(count - 1, after, last + after)
}

function fib(n){
  return calc(n, 0 ,1)
}

console.log('fib(5)')
console.log(fib(100))


