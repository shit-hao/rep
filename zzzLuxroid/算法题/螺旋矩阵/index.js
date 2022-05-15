var spiralOrder = function (matrix) {
  let arr = new Array()
  let left = 0, right = matrix[0].length - 1
  let top = 0, down = matrix.length - 1
  while (true) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i])
    }
    top++
    if (top > down) break
    for (let i = top; i <= down; i++) {
      arr.push(matrix[i][right])
    }
    right--
    if(left > right) break
    for (let i = right; i >= left; i--) {
      arr.push(matrix[down][i])
    }
    down--
    if(top > down) break
    for (let i = down; i >= top; i--) {
      arr.push(matrix[i][left])
    }
    left++
    if(left > right) break;
  }
  console.log('arr')
  console.log(arr)
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]