// https://segmentfault.com/a/1190000016389127

//这个应该就是头条说的使用队列的方式 解析下 nice
function asyncPool(poolLimit, array, iteratorFn) {
    let i = 0;
    const ret = []; //全部的promise
    const executing = []; //执行中的promise
    const enqueue = function () {
        // 边界处理，array为空数组
        if (i === array.length) {
            return Promise.resolve();
        }
        // 每调一次enqueue，初始化一个promise
        const item = array[i++];
        const p = Promise.resolve().then(() => iteratorFn(item, array));
        // 放入promises数组
        ret.push(p);
        // promise执行完毕，从executing数组中删除
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        // 插入executing数字，表示正在执行的promise
        executing.push(e);
        // 使用Promise.rece，每当executing数组中promise数量低于poolLimit，就实例化新的promise并执行
        let r = Promise.resolve();
        if (executing.length >= poolLimit) {
            r = Promise.race(executing);
        }
        // 递归，直到遍历完array
        return r.then(() => enqueue());
    };
    return enqueue().then(() => Promise.all(ret));
}

const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));
return asyncPool(2, [3000, 1000, 3000,4000,5000], timeout).then(results => {
    console.log(results)
});

// 思路解析

// 拿个队列一直往里推 函数里做判断当执行中的函数长度>limit 就用Promise.race 找到最早执行完的那个 然后拿着race的链条继续执行

