看手动实现call,apply,bind,bind用到了函数柯里化，顺便学学，之前学的都忘记了，哈哈哈

概念:
柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
并且返回接受余下的参数且返回结果的新函数的技术(并没有强制层数,只是将多个参数的函数的接受转为了单一参数的接受)
虽然看起来不是人话，但是仔细思考的确能发现一些东西
如果你固定某些参数，你将得到接受余下参数的一个函数
柯里化又称部分求值，柯里化函数会接收一些参数，然后不会立即求值，而是继续返回一个新函数，将传入的参数通过闭包的形式保存，等到被真正求值的时候，再一次性把所有传入的参数进行求值
柯里化(Currying)具有：延迟计算、参数复用、动态生成函数的作用。

讲一个函数柯里化 化的原则就是收集函数参数

ps: 函数的length是形参的个数


Function.prototype.bind = function (context) {
    var _this = this
    var args = Array.prototype.slice.call(arguments, 1)
 
    return function() {
        return _this.apply(context, args)
    }
}

// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}
