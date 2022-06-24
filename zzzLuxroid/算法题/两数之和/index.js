// 1 最蠢的 计算所有结果 遍历两次数组 
// 暴力解法
// function calc(nums, target) {
//   let targetArr = []
//   nums.forEach((item,index) => {
//     if(targetArr.length > 0){
//       return
//     }
//     let pivot = item
//     let newArr = nums.slice(index + 1)
//     for (let i = 0; i < newArr.length; i++) {
//       if(newArr[i] + pivot === target){
//         targetArr.push(...[index, i + index + 1])
//         break
//       }
//     }
//   });
//   return targetArr
// }

// let a = [2,7,11,15]
// console.log(calc(a, 9))

// 利用Map

function calc(nums,target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])){ //找到
      return[map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
}


let a = [2,7,11,15]
console.log(calc(a, 9))
