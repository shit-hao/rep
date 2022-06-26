https://segmentfault.com/a/1190000040499863?sort=votes

https://zhuanlan.zhihu.com/p/432732779


2个方案

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});

CancelToken.source()是什么

返回的source是什么

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

返回的source是

return {
  token: token,
  cancel: cancel
};

token是一个函数

var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  cancel是 一个函数

  function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  }

  牛逼，高阶函数，


  然后执行source.cancel('Operation canceled by the user.');

  resolvePromise()

  onCanceled = function(cancel) {
    if (!request) {
      return;
    }
    reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
    request.abort();
    request = null;
  };

  config.cancelToken && config.cancelToken.subscribe(onCanceled);

  config.cancelToken是source.token即

  new CancelToken(function executor(c) {
    cancel = c;
  });
  subscribe(onCanceled);

  /**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

给this._listeners push onCanceled

然后等resolvePromise()执行的时候

  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  

  整个流程结束
