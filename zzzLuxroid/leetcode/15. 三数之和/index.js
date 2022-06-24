// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 为什么要排序
// 保证左边最小 右边最大
// 唯一变动的值是i的值

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let targetArr = []
  let arr = nums.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1, right = arr.length - 1
    while(left < right){
      let sum = arr[i] + arr[left] + arr[right]
      if(sum === 0){
        targetArr.push([arr[left], arr[i], arr[right]]) // find one
        while(left < right && arr[left] === arr[left + 1]) { left++ }
        while(left < right && arr[right] === arr[right - 1]) { right-- }
        left++
        right--

      }
      if(sum < 0) left++
      if(sum > 0) right--
    }
  }
  console.log('targetArr')
  console.log(targetArr)
  return targetArr
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重
        while (L < R && nums[R] == nums[R - 1]) R--; // 去重
        L++;
        R--;
      }
      else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  console.log('ans')
  console.log(ans)
  return ans;
};

// threeSum([-1,0,1,2,-1,-4])
threeSum1([-2, 0, 0, 2, 2])

// [-1,0,1,2,-1,-4]


// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
