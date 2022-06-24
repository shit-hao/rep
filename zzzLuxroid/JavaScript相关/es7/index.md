ES7 新特性
https://juejin.cn/post/7090804274317230111#heading-38

Array.prototype.includes
Array.prototype.includes用法都容易和简单。它是一个替代indexOf，开发人员用来检查数组中是否存在值，indexOf是一种尴尬的使用，因为它返回一个元素在数组中的位置或者-1当这样的元素不能被找到的情况下。所以它返回一个数字，而不是一个布尔值(开发人员需要实施额外的检查)。在ES6，要检查是否存在值，你需要做一些判断，因为他们没有匹配到值，Array.prototype.indexOf返回-1变成了true（转换成true），但是当匹配的元素为0位置时候，该数组包含元素，却变成了false。

Exponentiation Operator

求幂运算大多数是为开发者做一些数学计算，对于3D，VR，SVG还有数据可视化非常有用。在ES6或者早些版本，你不得不创建一个循环，创建一个递归函数或者使用Math.pow。例如，使用Math.pow创建一个递归箭头函数。

2 ** 3 === Math.pow(2, 3)


