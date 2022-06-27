function findKthLargest(nums, k) {
  return quick(nums, 0, nums.length - 1, nums.length - k)
}

function getIndex(nums, left, right) {
  let pivot = nums[Math.floor((left + right) / 2)]
  let p1 = left, p2 = right
  while(p1 < p2){
    while(nums[p1] < pivot){
      p1++
    }
    while(nums[p2] > pivot){
      p2--
    }
    if(p1 < p2){
      let temp = nums[p1]
      nums[p1] = nums[p2]
      nums[p2] = temp
    }
    if(nums[p1] === nums[p2] && p1 !== p2){
      p1++
    }
  }
  return p1
}

function quick(nums, left, right, k) {
  let index
  if (left < right) {
    index = getIndex(nums, left, right, k)
    if (index < k) {
      return quick(nums, index + 1, right, k)
    } else if (index > k) {
      return quick(nums, left, index - 1, k)
    } else {
      return nums[index]
    }
  }
  return nums[left]
}

console.log(findKthLargest([1], 1))

