var findMedianSortedArrays = function(nums1, nums2) {
  let n1 = nums1.length
  let n2  = nums2.length
  let len = n1 + n2

  let prevalue = -1
  let curvalue = -1
  
  let p1 = 0
  let p2 = 0
  

  for(let i = 0; i <= Math.floor(len/2); i++) {
      prevalue = curvalue
      if(p1 < n1 &&(p2 >= n2 || nums1[p1] < nums2[p2])) {
          curvalue = nums1[p1]
          p1++
      }else {
          curvalue = nums2[p2]
          p2++
      }
  }

  return len % 2 === 0 ? (curvalue + prevalue) / 2 : curvalue
};
