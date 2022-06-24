// https://leetcode.cn/problems/move-zeroes/

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 简单

// var moveZeroes = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== 0) {
//           let temp = nums[j];
//           nums[j] = nums[i];
//           nums[i] = temp;
//           j++;
//       }
//   }
//   console.log('nums2')
//   console.log(nums,j)
// };


function moveZeroes(arr){
  let j = 0, temp
  arr.forEach((item, index) => {
    if(item !== 0){//和j做交换
      temp = arr[j]
      arr[j] = arr[index]
      arr[index] = temp
      j++
    }
  });
  console.log('arr2')
  console.log(arr)
}

moveZeroes([0,0,0,1,0,3,12])

