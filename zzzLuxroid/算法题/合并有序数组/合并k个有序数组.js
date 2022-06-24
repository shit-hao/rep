var mergeK = function(...arr){
  //  分治法
  let i = 1
  let sortedArr = arr[0]
  while(i < arr.length){
    sortedArr = merge(sortedArr, arr[i])
    i++
  }

}

var merge = function(nums1, nums2) {
  let p1 = 0, p2 = 0;
  let m = nums1.length, n = nums2.length
  let sorted = []
  while(p1 < m || p2 < n){
    if(p1 === m){
      sorted.push(nums2[p2])
      p2++
    } else if(p2 === n){
      sorted.push(nums1[p1])
      p1++
    }else if(nums1[p1] <= nums2[p2]){
      sorted.push(nums1[p1])
      p1++
    }else{
      sorted.push(nums2[p2])
      p2++
    }
  }
  return sorted
};

mergeK([1,2,3], [-1,2,10,18,19,49], [2,5,6,919,1000], [-9, -5, -3, -1, 0, 4])