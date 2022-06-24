<!-- https://www.cnblogs.com/flydean/p/15319158.html -->

replaceAll

熟悉java的朋友应该都知道，java中有两个进行字符串替换的方法，分别是replace和replaceAll，他们的区别在于replace是替换字符串，而replaceAll是进行正则表达式匹配。

但是在javascript中两者的涵义有所不同，在JS中replace是替换第一个出现的字符串，而replaceAll就是字面上的意思替换所有的字符串，我们举个例子：

私有方法

但是如果我们不希望getAge()方法直接暴露给外部使用，也就是说希望getAge()是一个私有方法，那么只需要在方法前面加上#即可。

class Student {
  #getAge() {
    console.log("永远18岁")
  }
}

student= new Student();
student.getAge();

同样运行，那么会得到下面的错误提示

Error: student.getAge is not a function

怎么处理呢？我们知道私有方法是可以在方法内部调用的，那么只需要创建一个公有方法，然后在这个公有方法中调用私有方法即可，如下所示：

class Student {
  #getAge() {
    console.log("永远18岁")
  }
  
  getPublicAge(){
    this.#getAge();
  }
 
}

student= new Student();
student.getPublicAge();

私有属性

上面讲到了私有方法，那么对于私有属性是怎处理的呢？

通常，对于属性，我们可以以get修饰符来进行修饰，然后就可以直接通过属性名来访问了：

class Student {
  get Age() {
    return 18;
  }
 
}

student= new Student();
console.log(student.Age);

结果我们会得到18这个输出。

同样，可以在属性名前面加上#，让其变成私有变量，如下所示
class Student {
  get #Age() {
    return 18;
  }
 
}

student= new Student();
console.log(student.Age);
上面代码将会输出undefined。

要想访问上述的私有属性，则可以用公有属性去调用私有属性方法：
class Student {
  get #Age() {
    return 18;
  }
   get publicAge() {
    return this.#Age
  }
}

student= new Student();
console.log(student.publicAge);

非常好用。

Promise.any() 和 AggregateError

promise.any可以返回任意一个提前resolve的结果，在现实的应用中，这种情况是非常常见的，我们来模拟一个例子：

数字分隔符

个新特性是为了方便程序员看代码而出现的，如果数字比较大，那么看起来就不是那么一目了然，比如下面的长数字：

一眼看不出这个数字的体量到底是多大，所以ES12提供了数字分隔符_。
分隔符不仅可以分割十进制，也可以分割二净值或者十六净值的数据，非常好用。
const number = 1_000_000_000_000;
const binary = 0b1010_0101_1111_1101;
const hex = 0xAF_BF_C3;

新的逻辑操作符

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。



let b;
let a = 0
let c = {name:'123'}

b = a ?? c