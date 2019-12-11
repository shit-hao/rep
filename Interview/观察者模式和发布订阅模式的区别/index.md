https://www.zhihu.com/question/23486749
https://www.jianshu.com/p/594f018b68e7
详见高赞回答

目前Vue使用的这一模式(暂时未知是哪种思想)
这两个模式实现的效果类似 
但是思想可能不同

看下区别

发布订阅模式是最常用的一种观察者模式的实现，并且从解耦和重用角度来看，更优于典型的观察者模式

普通的观察者模式 只有2个交互的对象

在观察者模式中，观察者需要直接订阅目标事件；在目标发出内容改变的事件后，直接接收事件并作出响应



在发布订阅模式中，发布者和订阅者之间多了一个发布通道；一方面从发布者接收事件，另一方面向订阅者发布事件；
订阅者需要从事件通道订阅事件

以此避免发布者和订阅者之间产生依赖关系
解耦发布者订阅者


发布订阅模式多了个事件通道

code:
观察者模式

function DownloadTask(id) {
  this.id = id;
  this.loaded = false;
  this.url = null;
}

DownloadTask.prototype.finish = function(url) {
  this.loaded = true;
  this.url = url;
  console.log('Task ' + this.id + ' load data from ' + url);
}
作者：无邪气
链接：https://www.zhihu.com/question/23486749/answer/314072549
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

function DownloadTaskList() {
  this.downloadTaskList = [];
}

DownloadTaskList.prototype.getCount = function() {
  return this.downloadTaskList.length;
};

DownloadTaskList.prototype.get = function(index) {
  return this.downloadTaskList[index];
};

DownloadTaskList.prototype.add = function(obj) {
  return this.downloadTaskList.push(obj);
};

DownloadTaskList.prototype.remove = function(obj) {
  const downloadTaskCount = this.downloadTasks.getCount();
  while (i < downloadTaskCount) {
    if (this.downloadTaskList[i] === obj) {
      this.downloadTaskList.splice(i, 1);
      break;
    }
    i++;
  }
};