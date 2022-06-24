// https://leetcode.cn/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
// 双指针
var merge = function (nums1, nums2) {
  let p1 = 0, p2 = 0, m = nums1.length , n = nums2.length
  let sorted = []
  while(p1 < m || p2 < n){
    if(p1 === m){ //m遍历结束了
      sorted.push(nums2[p2++])
      p2++
    }else if(p2 === n){ // n遍历结束了
      sorted.push(nums1[p1])
      p1++
    }else if(nums1[p1] < nums2[p2]){
      sorted.push(nums1[p1])
      p1++
    } else {
      sorted.push(nums1[p2])
      p2++
    }
  }
  console.log('sorted')
  console.log(sorted)
};

// merge([1,2,3], [-1,2,10,18,19,49] )
merge([-1, 1, 2, 2, 2, 3, 5, 6, 10, 18, 19, 49, 919, 1000], [-9, -5, -3, -1, 0, 4])