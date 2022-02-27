
https://zhuanlan.zhihu.com/p/55622833
Q：能说说当Vue修改Data到页面渲染时发生了什么吗

A: 首先修改Data后会触发在渲染模板时收集的Watcher依赖，就是在$mount时，mountComponent中声明了一个updateComponent，并且定义了一个Watcher，这个Watcher就是dep收集的依赖，并且这个updateComponent会在Watcher中当做getter执行一次，(初次渲染收集依赖) 当Data修改后，会通过dep.notiy()去触发收集的Watcher的update方法，这个方法有几个判断，一个lazy会把dirty置为true，一个sync，会直接调用run，其他的情况会开启一个队列queueWatcher(异步更新),使用nextTick进行异步更新，触发多个相同的wather只进队列一个(有id)，然后通过nextTick flush掉这个队列函数名flushSchedulerQueue,按照id排序，然后遍历执行
edge case：当flush时，还有watcher执行

如果在更新队列中找到了传进来的watcher（i===index && queue[i].id === watcher.id）
则将刚传进来的watcher放在这个队列中已存在的watcher之后。说白了就是再更新一遍这个watcher。
举例说明：当前flushSchedulerQueue方法中正在更新id为6的watcher，但此时用户又传进来一个id为6的watcher。这表明在更新当前watcher的过程中，watcher关联的dep再次发生了变化。那为了让它后面的其他watcher可以用到它最新的值，我应该重新更新一次id为6的watcher。
从后往前遍历，一直遍历到当前正在更新的watcher，也没找到相同的watcher，但是queue[i].id < watcher.id则将watcher放在相应位置上。举例说明：更新队列中有1,3,4,6四个watcher，当前正在更新id为4的watcher，那此时queueWatcher被调用并传进来一个id为5的watcher，于是就将这个watcher放到4的后面。

wather执行run函数就是去执行updateComponent去更新dom

https://www.cnblogs.com/DevinnZ/p/11065645.html

好像理清了

收集依赖

当我们mountComponent时，会声明一个updateComponent，并且new Watcher，Watcher内部逻辑判断会执行this.get(),this.get()内部执行getter,此时getter就是updateComponent函数，看下get咋写的
  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  get () {
    pushTarget(this)
    let value
    const vm = this.vm
    try {
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value)
      }
      popTarget()
      this.cleanupDeps()
    }
    return value
  }
  先pushTarget，给全局的Dep.target赋值，this的getter就是我们的updateComponent，
  当执行value = this.getter.call(vm, vm)这行代码时，开始走_update,_patch,渲染页面，这时Dep.target一直是getter为updateComponent的这个Watcher，然后渲染过程中，到了喜闻乐见的双向绑定Object.defineProperty

    Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })

  渲染页面时肯定执行get，此时Dep.target仍然没有变化，执行dep.depend()
  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }

  dep在双绑中是一个闭包

  这里有一个疑惑的点,dep.addSub(this)，这个this按我理解仍然是Dep.target,俄罗斯套娃？
  理解：dep添加了getter为updatecom的Watcher，在defineReactive中每个组件的data都有一个dep，可以理解为当前组件使用了这个变量就将这个更新组件的Watcher添加到这个变量的dep中，
  当赋值时，执行dep.notify()执行该组件或者该变量的之前定义的updatecom的Watcher的getter就是updatecom，updatecom内会走__patch__也就是domdiff

  渲染watcher, 负责更新视图变化的，即一个vue实例对应一个渲染watcher
  用户自定义watcher，用户通过watch：{value(val, oldVal){}}选项定义的，或者this.$watch()方法生成的。
  computed选项里面的计算属性也是watcher, 和第2点中的watcher的区别是它的watcher实例有dirty属性控制着watcher.value值的变化
