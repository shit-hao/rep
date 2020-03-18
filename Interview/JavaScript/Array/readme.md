官方文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

几乎所有跟角标有关的操作都是包括 begin，不包括end

#array
array只有一个属性,length,所有方法都挂载在原型上.
#静态方法
Array(arg) 构造函数 对象是用于构造数组的全局对象，
Array.from(arg)方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。 浅拷贝
Array.isArray(arg)用于确定传递的值是否是一个 Array。
Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）
#原型方法
Array.prototype.concat()
方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。浅拷贝
Array.prototype.copyWithin()
copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

arr.copyWithin(target[, start[, end]]) 会改变原数组
target
0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
如果 target 大于等于 arr.length，将会不发生拷贝。如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
start
0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
如果 start 被忽略，copyWithin 将会从0开始复制。
end
0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）

Array.prototype.entries()

entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

Array.prototype.every()
every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

Array.prototype.some()
some() 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。
Array.prototype.fill()
fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
Array.prototype.filter()
filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
Array.prototype.find()
find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
Array.prototype.findIndex()
findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
Array.prototype.flat()
flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回.
//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr.flat(Infinity);
flat() 方法会移除数组中的空项:

Array.prototype.flatMap()
flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
Array.prototype.forEach()
forEach() 方法对数组的每个元素执行一次提供的函数。不改变原数组
Array.prototype.includes()
includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
arr.includes(valueToFind[, fromIndex])
Array.prototype.indexOf()
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
arr.indexOf(searchElement[, fromIndex = 0]) fromIndex为0 时查找顺序还是从前往后
Array.prototype.join()
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
arr.join([separator])
如果一个元素为 undefined 或 null，它会被转换为空字符串。 会保留separator
Array.prototype.keys()
keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
Array.prototype.pop()
pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
Array.prototype.push()
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
Array.prototype.reduce()
reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]) 好方法 用处很多
您的 reducer 函数的返回值分配给累计器accumulator，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
Array.prototype.reduceRight()
reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
Array.prototype.reverse()
reverse() 方法将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组。改变原数组
Array.prototype.shift()
shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
Array.prototype.unshift()
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
Array.prototype.slice()
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
arr.slice([begin[, end]])
如果省略 begin，则 slice 从索引 0 开始。如果 end 被省略，则slice 会一直提取到原数组末尾
Array.prototype.sort() 改变原数组
 sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
 Array.prototype.splice()
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
Array.prototype.toLocaleString()
toLocaleString() 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
Array.prototype.toString()
toString() 返回一个字符串，表示指定的数组及其元素。
Array.prototype.values()
values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值


一些其他的东西 ,大量的数组操作返回了迭代器对象(Iterator) 
