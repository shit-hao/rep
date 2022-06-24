https://zhuanlan.zhihu.com/p/268534702

let a = new Array(3).map((item)=>{
  return [3]
})

new Array(len) 做了什么
Array 构造函数支持不传或传 1-n 个参数，我们这里仅讨论传一个类型为正整数参数时的情况。在探究new Array(len)做什么之前，我们先看看new Array(len)创建的数组是怎样的

let arr = new Array(5)
console.log(arr)
// 输出：[empty × 5]
console.log(arr.map)
// 输出：ƒ map() { [native code] }
console.log(arr.length)
// 输出：5

从上面的代码中可以发现，使用new Array(len)创建的数组中，Array 相应的方法、属性都存在，但数组中的元素是 「empty」

稀疏数组与密集数组

稀疏数组：索引不连续，数组长度大于元素个数的数组, 可以简单理解为有empty的数组；
密集数组：索引连续, 数组长度等于元素个数的数组；

稀疏数组怎么转密集数组

Array.form(arr);
密集数组 => 稀疏数组
var arr = [1,3,4,5,6]; // 密集数组   
arr.length = 10 // [1, 3, 4, 5, 6, empty × 5]

值为empty的不能调用函数，cb不会执行

稀疏数组特性

稀疏数组在大多数遍历数组的方法中，遇到「empty」元素的时候，callback 函数是不会执行的，如：map, forEach, filter 等, 而且这种现象在 for...in 语句中，同样适用。