
/**
 * 2248. Intersection of Multiple Arrays
 * Solution: Counting Sort
 * Time Complexity: O(n)
 * Space Complecity: O(n)
 * @param {number[][]} nums
 * @return {number[]}
 */
// 统计出现的次数
 var intersection = function (nums) {
  const counts = new Array(10).fill(0);
  for (const numArr of nums) {
      for (const num of numArr) {
          console.log('num')
          console.log(num)
          counts[num]++;
      }
  }
  return counts.map(
      (val, idx) => val === nums.length ? idx : 0
  ).filter(val => val !== 0);
};

let nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]

console.log(intersection(nums))