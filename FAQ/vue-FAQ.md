Vue 面试题总结
1.$nextTick原理
A:其实$nextTick就是我们常说的宏任务和微任务，只不过Vue内部把他封装了一层
Vue会根据浏览器支持的特性来选择执行哪个方法去达到宏任务和微任务，比如会判断Promise，MutationObserver，setImmediate，如果都不支持就会使用常见的setTimeout

2.看过组件库的源码吗,如何实现一个组件呢？
要实现Vue的插件的话,vue插件应该暴露一个install方法或者对象内有install方法,Vue.use的时候会调用暴露的install并且传入Vue实例和一些自定义参数
A:组件分两种:
  1:样式组件
    我们只需要引入然后使用Vue.component在全局声明这个组件即可->全局声明组件使用Vue.component(Alert.name, Alert),局部声明就是普通的import,并且在组件的compont中声明组件
  2:手动调用的组件,比如$dialog,$message等
    这类组件比较特殊，一般是手动调用,而不是主动声明的样式组件,我们需要在Vue的原型上挂载一个方法,这个方法手动的去调用Vue.$mount去挂载组件



1.1$nextTick其实就是我们所说的宏任务和微任务,只不过Vue把他包装了一层
具体实现
Vue在内部维护了一个callbacks队列和一个pending变量(保证任务的唯一性)
timerFunc()执行
这个函数在执行时就已经声明好了
并且执行一次nextTick就会清空所有的callbacks

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}



function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

不会出现cb数组不准的情况,因为都是同步的,没执行一次都会callbacks.length = 0;