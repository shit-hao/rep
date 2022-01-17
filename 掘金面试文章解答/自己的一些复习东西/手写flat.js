// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// var newArray = arr.flat([depth])
// 数组扁平化
Array.prototype.myFlat = function(depth = 1) {
  let arr = this
  console.log('arr')
  console.log(arr)
  let newArr = []
  arr.forEach((item,index)=>{
    if(Object.prototype.toString.call(item) === '[object Array]'){
      console.log('item')
      console.log(item)
      return newArr.push(...(item.myFlat()))
    }else{
      newArr.push(item)
    }
  })
  return newArr
}
// let a = []
setTimeout(()=>{
  console.log('[1,2,[3,4]].myFlat()')
  console.log([1,2,[3,[3,5]]].myFlat())
})

// 对象的扁平化

// 都差不多
