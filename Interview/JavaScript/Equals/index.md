// 相等运算符比较规则

if(x)始终等价于 if(Boolean(x))


1.原始类型的值会转换成数值再进行比较。
    1 == true yes
    0 == false yes
    -1 == false no Number(false) === 0
    2 == true no Number(true) === 1

2.对象与原始类型值比较
对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较
