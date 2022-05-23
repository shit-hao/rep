const fib = function(N) {
  return calc(N, 0, 1);
};

const calc = function(count, n, m) {
  if (count === 0) return n;
  return calc(count - 1, m, n + m);
}

console.log(fib(5))
