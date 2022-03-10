// 牛逼

var a = 222333444.12
function addDou(num) {
  var numArr = num.split('.')
  num = numArr[0]
  var result = ''
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  result = result + '.' + numArr[1]
  return result
}
console.log(addDou(a.toString()))
