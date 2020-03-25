let demo = require('./sup-cjddemo')

console.log(demo.count())
console.log(demo.setCount(666))
console.log(demo.count())


// 这是cjs的一个特性

// CommonJS模块输出的是一个值的复制

// 你如果在内部更改他 不会影响到之前输出的值

// 怎么改变这种情况,可以吧count定义为一个getter