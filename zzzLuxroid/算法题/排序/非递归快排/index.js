
// 快排 非递归 原地排序

var sortArray = function (nums) {
  return quick(nums)
};

function quick(arr, left = 0, right = arr.length - 1) {
  var list = [[left, right]]; // 模拟栈
  while (list.length > 0) {
    var part = list.pop()
    let p1 = part[0], p2 = part[1], pivotIndex = p1
    if (p1 >= p2) continue;
    while (p1 < p2) {
      while (arr[p2] >= arr[pivotIndex] && p2 > pivotIndex) p2--;
      if (p1 >= p2) break;
      while (arr[p1] <= arr[pivotIndex] && p1 < p2) p1++;
      var temp = arr[pivotIndex];
      arr[pivotIndex] = arr[p2];
      arr[p2] = arr[p1];
      arr[p1] = temp;
      pivotIndex = p1
    }
    list.push([part[0], pivotIndex - 1]);
    list.push([pivotIndex + 1, part[1]]);
  }
  return arr
}


console.log(quick([-74, 48, -20, 2, 10, -84, -5, -9, 11, -24, -91, 2, -71, 64, 63, 80, 28, -30, -58, -11, -44, -87, -22, 54, -74, -10, -55, -28, -46, 29, 10, 50, -72, 34, 26, 25, 8, 51, 13, 30, 35, -8, 50, 65, -6, 16, -2, 21, -78, 35, -13, 14, 23, -3, 26, -90, 86, 25, -56, 91, -13, 92, -25, 37, 57, -20, -69, 98, 95, 45, 47, 29, 86, -28, 73, -44, -46, 65, -84, -96, -24, -12, 72, -68, 93, 57, 92, 52, -45, -2, 85, -63, 56, 55, 12, -85, 77, -39]))
