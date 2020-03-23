// 防抖和节流的区别
// 防抖: 一段时间后才执行
// 节流：一段时间内只能执行一次
// https://blog.csdn.net/Beijiyang999/article/details/79832604
// 自己的简单实现
//防抖实现思路 使用timer 并且严格遵守timer 执行清空timer

function debounce(func, wait, immediate) {
    let time
    let debounced = function () {
        let context = this
        if (time) clearTimeout(time)

        if (immediate) {
            if (!time) func.apply(context, arguments)
            time = setTimeout(
                () => {
                    time = null
                }, wait)
        } else {
            time = setTimeout(
                () => {
                    func.apply(context, arguments)
                }, wait)
        }
    }

    debounced.cancel = function () {
        clearTimeout(time)
        time = null
    }
    return debounced
}
debounce(() => {
    console.log(123)
}, 1000, true)

//节流实现 当timer为空时执行函数 不执行清空timer
// https://blog.csdn.net/beijiyang999/article/details/79836463

function throttle(func, wait) {
    let time
    return function () {
        let self = this
        if (!time) {
            time = setTimeout(() => {
                func.apply(self, arguments)
                time = null
            }, wait)
        }
    }
}