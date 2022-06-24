// const fib = function(N) {
//   return calc(N, 0, 1);
// };

// const calc = function(count, n, m) {
//   if (count === 0) return n;
//   return calc(count - 1, m, n + m);
// }





let fib = function(N){
  return calc(N, 0, 1)
}
function calc(count, before, after){
  if(count === 0){
    return before
  }
  return calc(count - 1, after, before + after)
}

console.log(fib(5))