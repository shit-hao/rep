let obj = {
  a: {
      b: {
          c: {
              d: '123'
          }
      }
  }
}
let str = "a.b.c"

// function find(obj, str) {

  // 使用reduce方法 找到指定的内容 。比如str = "a.b.c" 返回 {d: "123"}

function find(obj,str) {
  let value = str.split('.').reduce((acc,item,index)=>{
    if(Object.prototype.toString.call(acc) === '[object Object]'){
      if(Object.prototype.toString.call(acc[item]) === '[object Object]'){
        return acc[item]
      }else{
        return undefined
      }
    } else {
      return obj[acc][item]
    }
    
  })
  console.log('value')
  console.log(value)
}


