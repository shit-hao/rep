// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// var maxSubArray = function (nums) {

//   let maxNum = nums[0];
//   let nowSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nowSum > 0) {
//       nowSum += nums[i];
//     } else {
//       nowSum = nums[i];
//     }
//     maxNum = Math.max(maxNum, nowSum);
//   }
//   console.log(maxNum)
//   // return maxNum;
// }
// maxSubArray([-2, 1,2, -3, -1, -1, -2, -1, -5, -4])

//思路nowSum 如果为负数 直接丢弃 将数组的下一个值给nowSum  然后和maxNum做对比
// 如果nowSum是正数 加数组的下一个之后 然后和maxNum做对比

let maxSubArray2 = (arr) => {
  let maxNum = arr[0]
  let nowSum = 0 //
  arr.forEach((item)=>{
    if(nowSum > 0){
      nowSum += item
    }else{
      nowSum = item
    }
    maxNum = Math.max(maxNum, nowSum)
  })
  console.log('max2')
  console.log(maxNum)
}
maxSubArray2([-2,1,-3,4,-1,2,1,-5,4])

// let maxSubArray = (arr) => {
//   let maxSum = arr[0]
//   let nowSum = 0
//   arr.forEach((item)=>{
//     if(item >= 0){
//       nowSum = nowSum + item
//     } else {
//       nowSum = item
//     }
//     maxSum = Math.max(nowSum,maxSum)
//   })
//   console.log('maxSum')
//   console.log(maxSum)
// }
// maxSubArray([-2, 1,2, -3, -1, -1, 2, 1, -5, 4])
// maxSubArray([-2, 6, 2, 3, -4, -1, -2, -1, -5, -4])
