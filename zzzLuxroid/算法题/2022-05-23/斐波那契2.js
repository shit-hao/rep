// 尾调用优化

function fib(n){
  return calc(n, 0, 1)
}

function calc(count, last, sum){
  if(count === 0){
    return sum
  }
  return calc(count-1, sum, last+sum)
}


console.log(fib(6))