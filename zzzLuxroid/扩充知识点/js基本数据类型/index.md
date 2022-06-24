JavaScript 语言中类型集合由原始值和对象组成。

基础数据类型

<!-- Number -->
<!-- String -->
<!-- Boolean -->
BigInt
Null
Undefined
Symbol

基本包装类型
Boolean、Number 和String

复杂数据类型 
Object

let str = 'hello 蛙人'
let str1 = str.substring(2)
实际上，每当读取一个基本类型的时候，js内部会自动创建一个基本包装类型对象，可以让我们调用一些方法来操作。

上面example中，str是一个字符串类型，然而它调用了substring方法，并将结果保存在了str1中，我们知道基本类型不是对象，我们就会想，哎 它不是对象为什么能调用方法，其实js内部已经实现了一系列的处理，当执行第二行代码时，访问过程处于一种读取状态，也就是要从内存中读取这个字符串的值。那js内部是怎么处理的呢，看下面

1.创建String类型的实例
2.在实例上调用指定的方法
3.最后销毁该实例

let str = new String('hello 蛙人')
let str1 = str.substring(2)
str1 = null

那么有的小伙伴就会疑惑，引用类型和基本包装类有什么不同呢，最主要的区别就是对象的生存期。

1.引用类型：使用new操作符创建的引用类型实例，在执行流离开当前作用域之前一直都保存在内存中，
2.基本包装类型：只存在一行代码的执行瞬间，然后立即销毁
基本包装类意味着我们不能在运行时为对象添加属性及方法，因为它们执行完后会立即销毁

let str = '蛙人'
str.age = 23
console.log(str.age) // undefined

上面第二行代码中，为“蛙人“添加 age 属性，但是在下面打印发现是 undefined，问题就在于，第二行代码执行完后立即销毁，第三行代码再次创建String对象发现没有该age属性。

基本包装类型
https://juejin.cn/post/6923049481361424397

基本包装类型 可以new的
new出来的对象中有PrimitiveValue 原始值，可以通过重写后的valueOf获取

需要注意的一个点 new Boolean(false) 在if语句中是true

BitInt原理

在number后面加一个n
1 number 1n BigInt 具体计算机底层原理不清楚

在if语句中按照number做判断

解释下typeof null 为 'object'的bug

JavaScript中的数据在底层是以二进制存储，比如null所有存储值都是0，但是底层的判断机制，只要前三位为0，就会判定为object，所以才会有typeof null === 'object'这个bug。

https://cloud.tencent.com/developer/article/1802327

为什么 typeof null 为 object 呢？

第一版的JavaScript是用32位比特来存储值的，且是通过值的低1位或3位来识别类型的。

1：整型（int）
000：引用类型（object）
010：双精度浮点型（double）
100：字符串（string）
110：布尔型（boolean）
另外还用两个特殊值：

undefined，用整数−2^30（负2的30次方，不在整型的范围内）
null，机器码空指针（C/C++ 宏定义），低三位也是000
所以 typeof null 结果就是 object

