ES8/ES2017
ES8 在上一个版本的基础上增加了很多新特性!ES8标准已于2017年6月发布

Object.values/Object.entries
在ES8 /ES2017之前，Javascript开发者需要迭代一个对象的自身属性时候不得不用Object.keys，通过迭代且使用obj[key]获取value值返回一个数组。

字符串填充

String.prototype.padStart 和 String.prototype.padEnd在javascript字符操作是一个不错的体验，引入padStart 和 padEnd，可以使开发人员更好地控制字符串原语。

padStart()在开始部位填充，返回一个给出长度的字符串，填充物给定字符串，把字符串填充到期望的长度。一个经典例子是使用空格创建列，使用它，可以帮助我们格式化一些字符串。
console.log('react'.padStart(10).length)         // "       react" is 10
console.log('backbone'.padStart(10).length)         // "  backbone" is 10
padEnd顾名思义就是从字符串的尾端右边开始填充。例如：
console.log('react'.padEnd(10, ':-)'))  // "react:-):-" is 10
console.log('backbone'.padEnd(10, '*')) // "backbone**" is 10

Object.getOwnPropertyDescriptors
Object.getOwnPropertyDescriptors返回对象obj所有自身属性描述。这是一个多参数版本的Object.getOwnPropertyDescriptors(obj,propName)将会返回obj中propName属性的一个单独描述。

在ES5中，ECMAScript中没有单个方法来简化两个对象之间的正确拷贝。开发者要使用Object.assign()来拷贝对象, Object.assign()分配属性只有copy和定义新的属性。当我们使用更加复杂对象和类原型，这可能会出问题。

Object.getOwnPropertyDescriptors允许创建真实的对象浅副本并创建子类,它通过给开发者描述符来做到这一点.在Object.create(prototype, object)放入描述符后，返回一个真正的浅拷贝。

Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)

异步函数
异步函数（或者async/await）特性操作是Promise最重要的功能。使用Promises处理Async函数的一种普遍写法如下所示：

function fetchData(url) {  
  return fetch(url)  
    .then(request => request.text())  
    .then(text => {  
      return JSON.parse(text);  
     })  
    .catch(err => {  
      console.log(`Error: ${err.stack}`);  
    });  
}
在ES8中，新增async和await关键字，我们可以利用它来实现同步读取操作。在内部，Async功能与生成器的功能相同，但是却不能转换为Generator Functions。使用ES2017中的Async函数如下：

async function fetchData(url) {  
  try {  
   let request = await fetch(url);  
   let text = await request.text();  
   return JSON.parse(text);  
  }  
  catch (err) {  
    console.log(`Error: ${err.stack}`);  
  }  
}
有了 async/await,我们的代码执行异步看起来像执行同步一样。可以从头到尾读起来非常简单和易懂，因为出现结果顺序和函数题中从头到尾顺序一样啊！

共享内存与原子操作
当内存被共享时，多个线程可以并发读、写内存中相同的数据。原子操作可以确保那些被读、写的值都是可预期的，即新的事务是在旧的事务结束之后启动的，旧的事务在结束之前并不会被中断。

Atomic 对象类似于 Math 对象，拥有许多静态方法，所以我们不能把它当做构造函数。 引入此功能后，低级别Atomics命名空间对象和一个SharedArrayBuffer构造函数，能够让开发人员开发共享多个service worker和核心线程之间的SharedArrayBuffer对象的数据，从而可以改善worker之间的协调。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics
