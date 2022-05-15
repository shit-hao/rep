let start = 0
function getStart(){
  if(start === 10){
    start = 0
  }
  return start ++
}
var spiralOrder = function (n) {
  let arr = new Array(n).fill(0).map(()=>{
      return Array(n).fill(0)
  });
  let left = 0, right = n - 1
  let top = 0, down = n - 1
  while(true){
    for (let i = left; i <= right; i++) {
      arr[top][i] = getStart()
    }
    top++
    if(top > down) break
    for (let i = top; i <= down; i++) {
      arr[i][right] = getStart()
    }
    right--
    if(right < left) break
    for (let i = right; i >= left; i--) {
      arr[down][i] = getStart()
    }
    down--
    if(down < top) break
    for (let i = down; i >= top; i--) {
      debugger
      arr[i][left] = getStart()
    }
    left++
    if(left > right) break
  }

  console.log('arr')
  console.log(arr)
};

spiralOrder(5)
// spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]