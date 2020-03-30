// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of
// for of 是ES6新增的一个方法 他可以遍历迭代器即在原型上实现了Symbol.iterator的目标值

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"