/**
 * @param {number} n
 * @return {number}
 */

// 斐波那契
// [1, 1 ,2, 3 ,5]
function calc(count, before, after) {
  if (count > 0) {
    return calc(--count, after, before + after)
  } else {
    return before
  }

}


var climbStairs = function (n) {
  return calc(n, 1, 1)
};

console.log(climbStairs(4))

