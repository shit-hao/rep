Q: 当你是用this.xxx = xxx
发生了什么

Vue初始化过程中调用
new Vue内部调用了一个_init的函数

_init函数 
做了一些初始化配置_uid，_isVue，调用了created相关的2个钩子
合并了一些配置赋值给vm.$option，初始化生命周期，双向绑定等，然后以$mount结尾

$mount是什么

$mount在多个文件中都有定义，带编译器的Vue和不带编译器的Vue

带编译器的版本多了一步主要时使用compileToFunctions编译成render函数然后在调用之前缓存的mount

缓存的mount

Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}

mountComponent干了什么

调用了mount相关的两个钩子，主要逻辑是
定义了一个updateComponent函数，该函数用于充当观察者模式中的观察者，当vm发生变化时调用此函数
code：
new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */)

从上面的代码可以看到，mountComponent 核心就是先调用 vm._render 方法先生成模拟 Node，在实例化一个渲染 Watcher，
在它的回调函数中会调用 updateComponent 方法，最终调用 vm._update 更新 DOM。

    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)

  自己的话说一遍

  首先在Vue初始化的时候$mount的时候Vue会定义一个函数叫updateComponent当成了了Watcher的回调函数，
  并且在双向绑定的时候被收集执行Dep.target 这个变量是一个全局的Watcher，代表当前get的那个组件，
  执行Dep.target.depend()，添加依赖，到这里，Watcher和updateComponent建立联系

  updateComponent内部是调用_update方法，这个方法对比是否有老node，然后执行vm.__patch__

  __patch__会把vnode转为真实node,会发生我们常说的dom diff



  https://www.jb51.net/article/107927.htm
  https://www.jianshu.com/p/3ba66c66c5a9

  https://blog.csdn.net/ajh99990/article/details/100355011

  详细说说dom diff？
  首页Vue会比较一些属性值，首先会执行sameVnode 比如key是否相同并且tagName是否相同等等，一般vue列表key的作用在这里体现，
  如果被认为是sameVnode的话，就会做尽可能的节点复用，调用patchVnode，如果不是同一个节点，就直接用新的替换旧的
  patchVnode方法
  patchVnode (oldVnode, vnode) {
    const el = vnode.el = oldVnode.el
    let i, oldCh = oldVnode.children, ch = vnode.children
    if (oldVnode === vnode) return
    if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
        api.setTextContent(el, vnode.text)
    }else {
        updateEle(el, vnode, oldVnode)
    	if (oldCh && ch && oldCh !== ch) {
            updateChildren(el, oldCh, ch)
    	}else if (ch){
            createEle(vnode) //create el's children dom
    	}else if (oldCh){
            api.removeChildren(el)
    	}
    }
}

看代码，
如果是同一类型的节点则
1.如果新旧node完全相等，则返回
2.如果他们是文本节点，且文本内容不一样，则替换
3.如果oldVnode有子节点，新的没有，则删除oldVnode的子节点
4.反之一样，如果old没有，新的有，则添加
5.如果两个vnode都有子节点，则开始比较。

如果不是 则完全替换

比较算法：

updateChildren

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







