// // new干了什么 继承原型链，执行构造函数，如果构造函数返回对象返回对象否则返回值

// function myNew(obj, ...args){
//   let newObj = {}
//   newObj.__proto__ === obj.prototype
//   let result = newObj.call(obj,...args)
//   return Object.prototype.toString.call(result) === '[object Object]' ? result : newObj
// }

// // MDN原话
// // 1.创建一个空的简单JavaScript对象（即{}）；
// // 2.链接该对象（即设置该对象的构造函数）到另一个对象 ；
// // 3.将步骤1新创建的对象作为this的上下文 ；
// // 4.如果该函数没有返回对象，则返回this。


// function muNew(obj, ...args) {
//   let newObj = {}
//   newObj.__proto__ = obj.prototype
//   let result = newObj.call(obj,...args)
//   return String.prototype.toString(result) === '[object Object]' ? result : newObj
// }

setTimeout(function () {
  console.log('setTimeout1');    //8
  new Promise(function (resolve) {
    console.log('promise0');    //9
    resolve()
  }).then(function () {
    console.log('settimeout promise resolveed');    //10
  })
});
setTimeout(function () {
  console.log('setTimeout2');    //11
});
const P = new Promise(function (resolve) {
  console.log('promise'); //1
  for (var i = 0; i < 10000; i++) {
    if (i === 10) {
      console.log('for');    //2
    }
    if (i === 9999) {
      resolve('resolve');
    }
  }
}).then(function (val) {
  console.log('resolve1');    //5
}).then(function (val) {
  console.log('resolve2');    //7
});
new Promise(function (resolve) {
  console.log('promise2');    //3
  resolve('resolve');
}).then(function (val) {
  console.log('resolve3');    //6
})
console.log('console');    //4


Function.prototype.myNew = function (obj,...args) {
  let newObj = {}
  newObj.__proto__ === obj.prototype
  let result = newObj.call(obj, ...args)
  // if(Object.to)
}


new Promise((res,rej)=>{
  // a.b()
  console.log('a')
  console.log(a)
  console.log('3')
}).then(()=>{
  console.log('4')
  console.log(4)
}).catch(()=>{
  console.log('5')
  console.log(5)
})




