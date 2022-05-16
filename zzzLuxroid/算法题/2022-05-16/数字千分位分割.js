function a(num){
  let str = num.toString()
  let result = ''
  while(str.length > 3){
    result = result + ',' + str.slice(-3)
    str = str.slice(0, str.length - 3)
  }
  result = str + result
  console.log('result')
  console.log(result)
}

a(222333444)