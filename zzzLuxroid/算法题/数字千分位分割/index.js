// 牛逼
// var a = 222333444.12
// function addDou(num) {
//   var numArr = num.split('.')
//   num = numArr[0]
//   var result = ''
//   while (num.length > 3) {
//     result = ',' + num.slice(-3) + result
//     num = num.slice(0, num.length - 3)
//   }
//   if (num) {
//     result = num + result
//   }
//   result = result + '.' + numArr[1]
//   return result
// }
// console.log(addDou(a.toString()))


// function addDou1(str) {
//   let result = ''
//   while (str.length > 3) {
//     result = ',' + str.slice(-3) + result
//     str = str.slice(0, str.length - 3)
//   }
//   result = str + result
//   console.log('result')
//   console.log(result)
// }

const array = new Array();
let count = -1;
// n=5
function produceArray(n, start = 0) {
  if (count == -1) {
    count = n;
  }
  if (start == 0) {
    for (let i = 0; i < n; i++) {
      array[i] = [];
      for (let j = 0; j < n; j++) {
        array[i].push(0);
      }
    }
  }
  if (count != 2 && count % 2 == 0 && n == 2) {
    return;
  }
  if (n == 1 && count % 2 != 0) {
    const index = (count - 1) / 2;
    array[index][index] = count * count - 1;
    return;
  }


  let increaseNum = start;
  if (n <= 0) {
    return;
  }
  for (let i = count - n; i < n - 1; i++) {
    array[i][count - n] = increaseNum++;
  }
  for (let i = count - n; i < n - 1; i++) {
    array[n - 1][i] = increaseNum++;
  }
  for (let i = n - 1; i > count - n; i--) {
    array[i][n - 1] = increaseNum++;
  }
  for (let i = n - 1; i > count - n; i--) {
    array[count - n][i] = increaseNum++;
  }
  produceArray(n - 1, increaseNum)
}

produceArray(5);　//此处可给n赋值即可，比如生成５＊５矩阵，n就等于５
for (let i = 0; i < array.length; i++) {
  console.log(array[i].join(","));
}