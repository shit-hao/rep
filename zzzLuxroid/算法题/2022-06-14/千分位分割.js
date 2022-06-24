// 千分位分割
function a(str){
  let targetStr = ''
  while(str.length > 3 ){
    targetStr = targetStr + ',' + str.slice(-3)
    str = str.slice(0, str.length - 3)
  }
  targetStr = str + targetStr
  console.log('targetStr')
  console.log(targetStr)
}

a('8123456')

// 123,456