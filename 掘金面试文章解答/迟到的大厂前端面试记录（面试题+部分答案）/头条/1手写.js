// 使用Array的reduce方法实现map。

// Array.map

Array.prototype.myMap = function(fn){
  let arr = this
  let resultArr = []
  arr.reduce((acc,curValue,index,src)=>{
    resultArr.push(fn(curValue))
  },arr[0])
  return resultArr
}

let a = [1,2,3,4]
let b = a.myMap((item, index)=>{
  return item + 1
})
console.log('b')
console.log(b)

// nice

// map实现reduce

Array.prototype._reduce = function (fn) {
  let arr = this
  let acc = 0
  arr.map((item, index,arr)=>{
    acc = acc + item
    fn(acc,item,index,arr)
  })
  console.log('acc')
  console.log(acc)
}

[1,2,3,4]._reduce((acc,cv,index,arr)=>{ return acc + cv})