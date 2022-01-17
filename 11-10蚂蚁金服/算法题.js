/**
问题：nodejs如何实现java语言里面的sleep
建议时间：3分钟
*/

// 使用setTimeOut？


/**
问题：请使用原生JS实现发布订阅模式，eg. A为发布者， B、C、D为订阅者
建议时间：8分钟
*/
let pubSub = function(){
	this.subs = {}
}
pubSub.prototype.addSub = function(type,fn){
  if(this.subs[type] && this.subs[type].length > 0){
  	this.subs[type].push(fn)
  }else{
  	this.subs[type] = []
    fn && this.subs[type].push(fn)
  }
}
pubSub.prototype.run = function(type){
  let fnArr = this.subs[type]
  if(fnArr){
    fnArr.forEach((item,index)=>{
    	item.call(this)
    })
  } else { 
  	console.error('请先订阅')
  }
}

let PUBSUB = new pubSub()
PUBSUB.addSub(A,B)
PUBSUB.addSub(A,C)
PUBSUB.addSub(A,D)
/**
问题：请使用JS实现快速排序算法
建议时间：8分钟
*/

function quickSort(arr){
	let index = Math.floor(arr.length / 2)
    let pixot = arr.splice(index, 1)
    let leftArr = []
    let rightArr = []
    arr.forEach((item,index)=>{
      if(item < pixot){
      	leftArr.push(item)
      }else{
      	rightArr.push(item)
      }
    })
    return quickSort(leftArr).concat(quickSort(rightArr))
  
}

// 后面总结 

// 发布订阅
let PubSub = function () {
  this.subs = {}
}
PubSub.prototype.addSub = function (type, fn) {
  if(this.subs[type]){
    this.subs[type].push(fn)
  } else{
    this.subs[type] = []
    this.subs[type].push(fn)
  }
}
PubSub.prototype.run = function (type, ...args) {
  let fnArr = this.subs[type]
  fnArr.forEach((item,index)=>{
    item.call(this, ...args)
  })
}
let PUBSUB = new PubSub()

PUBSUB.addSub('a',(a)=>{console.log(a)})
PUBSUB.addSub('a',()=>{console.log('2')})
PUBSUB.addSub('a',()=>{console.log('3')})
PUBSUB.run('a', 4)

// js快速排序
function quickSort(arr) {
  if(arr.length <= 1){
    return arr
  }
  let index = Math.floor(arr.length / 2)
  let value = arr.splice(index,1)[0]
  let leftArr = []
  let rightArr = []
  arr.forEach((item,index)=>{
    if(item < index){
      leftArr.push(item)
    }else{
      rightArr.push(item)
    }
  })
  return quickSort(leftArr).concat([value]).concat(rightArr)
}

// 观察者模式

let Subject = function () {
  this.obs = []
}
Subject.prototype.add = function (fn) {
  this.obs.push(fn)
}
Subject.prototype.run = function (...args) {
  this.obs.forEach((item)=>{
    item.update(1)
  })
}

let ob = function (name) {
  this.name = name
}
ob.prototype.update = function (...args) {
  console.log('我是arg')
  console.log(this.name)
}

let sub = new Subject()
let OB1 = new ob('1')
let OB2 = new ob('2')
sub.add(OB1)
sub.add(OB2)
sub.run()

// 手写call
Function.prototype.myCall = function (context, ...args) {
  let fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}

// 手写bind

Function.prototype.myBind = function (context, ...args) {
  let self = this
  return function (...innerArgs) {
    let allArgs = [...args].concat([...innerArgs])
    return self.apply(context, allArgs)
  }
}

// 二分查找 前提 有序数组

function bfind(arr, low, high, target) {
  if(low > high){
    console.warn('no find')
    return
  }
  let midIndex = Math.floor((low + high) / 2)
  if(target > arr[midIndex]){
    let nlow = midIndex + 1
    return bfind(arr, nlow, high, target)
  } else if(target < arr[midIndex]){
    let nhigh = midIndex - 1
    return bfind(arr, low, nhigh, target)
  } else {
    return midIndex
  }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = bfind(arr, 0 , arr.length,  0);


// 快排
function quickSort(arr) {
  if(arr.length < 1){
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex,1)[0]
  let leftArr = []
  let rightArr = []
  arr.forEach((item)=>{
    if(item < pivot){
      leftArr.push(item)
    }else{
      rightArr.push(item)
    }
  })
  return quickSort(leftArr).concat([pivot]).concat(rightArr)
}
//  二分查找  前提 数组 有序
function bfind(arr,low,high,target) {
  if(low > high){
    console.log('low,high')
    console.log(low,high)
    console.warn('no find')
    return
  }
  let midIndex = Math.floor((low + high ) /2)
  let mid = arr[midIndex]
  if(mid < target){
    let nlow = midIndex + 1
    return bfind(arr,nlow, high,target)
  } else if(mid > target){
    let nhigh = midIndex  - 1
    return bfind(arr,low, nhigh,target)
  } else {
    return midIndex
  }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
var result = bfind(arr,0, arr.length, 86);

// 寄生组合继承

function link(child, parent) {
  let agentObj = Object.create(parent.prototype)
  agentObj.constructor = child
  child.prototype = agentObj
}

function parent(t) {
  this.t = t
}

function child(params) {
  parent.call(this, params)
}
child.prototype.say = function () {
  console.log('this.t')
  console.log(this.t)
}

link(child, parent)
let Child = new child(1)
Child.say()






