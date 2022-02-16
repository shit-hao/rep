被问住了 主要是

Watch
 



Computed




其实这俩在功能上是可以保持一致的  用Computed做到的Watch一样可以做到

在Vue的 template模板内（{{}}）是可以写一些简单的js表达式的很便利，如上直接计算 {{this.firstName + ' ' + this.lastName}}，因为在模版中放入太多声明式的逻辑会让模板本身过重，尤其当在页面中使用大量复杂的逻辑表达式处理数据时，会对页面的可维护性造成很大的影响，而 computed 的设计初衷也正是用于解决此类问题。

在一些简单计算上 Computed有一些性能优势(由于缓存)

当我们试图通过数据对象来创造另一个属性时，推荐使用computed

当我们试图通过侦听数据对象的改变来做点什么（比如执行一个函数），我们就可以使用watch，在使用watch时尤其要注意其为异步执行的特点。

源码上的区别
Computed：
initComputed -> 
if (!isSSR) {
  // create internal watcher for the computed property.
  watchers[key] = new Watcher(
    vm,
    getter || noop,
    noop,
    computedWatcherOptions
  )
}，computedWatcherOptions有一个关键变量{lazy: true},getter是声明的函数，执行this.a,执行a的getter

给每个计算属性的key建一个Watcher

然后调用defineComputed -> createComputedGetter, 给每个key创建getter
return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
  每次执行计算属性的getter都会走这个
  watcher.dirty是什么，在我们创建属性的Watcher时，传入了一个参数lazy:true,这个计算属性收集的Watcher中就有目标Watcher，当目标Watcher发生变化时，本应notify计算属性值更新，但是由于lazy:true,所以  
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }
  只给这个Watcher的dirty设置成了true，并没有去执行对应的Watcher，当我们去执行计算属性的Watcher时，就会去

    if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
    evaluate () {
      this.value = this.get()
      this.dirty = false
    }
    如果dirty的就去执行evaluate，并把dirty置为false，第二个判断应该只有初始化的时候才会执行，应为后面Dep.target都为null了

    watch