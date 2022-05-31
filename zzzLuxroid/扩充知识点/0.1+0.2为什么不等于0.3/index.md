https://juejin.cn/post/7089705123298951205

在计算机上计算时，是将十进制转换为二进制后进行计算，并将计算结果从二进制转换为十进制再次显示。不仅是JavaScript，其他语言如python也是如此。

在JavaScript中主要是因为 Number 类型遵循的是 IEEE 754 标准，使⽤的是 64 位固定⻓度来表示。

IEEE 754 浮点数由三个域组成，分别为 sign bit (符号位)、exponent bias (指数偏移值) 和 fraction (分数值)。64 位中，

sign bit 占 1 位，exponent bias 占 11 位，fraction 占 52 位。

通过公式表示浮点数的值 value = sign x exponent x fraction

当⼀个数为正数，sign bit 为 0，当为负数时，sign bit 为 1.

以 0.1 转换为 IEEE 754 标准表示为例解释⼀下如何求 exponent bias 和 fraction。转换过程主要经历 3 个过程：

1.将 0.1 转换为⼆进制表示
2.将转换后的⼆进制通过科学计数法表示
3.将通过科学计数法表示的⼆进制转换为 IEEE 754 标准表示

将转换后的二进制通过科学计数法表示
0.00011...(⽆限重复 0011) 通过科学计数法表示则是 1.10011001...(⽆限重复 1001)*2

如何避免这个问题

在 JavaScript 中避免此错误的唯一方法是四舍五入到所需的小数位数。
