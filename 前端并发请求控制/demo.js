//第一种解法


//思路
// 全局维护一个数组 然后 用limit的数量去执行promise 对这个数组进行-- 并且在promise里判断 如果list长度还有 就递归 直到没有
//然后返回Promise.all的这3个Promise nice 真是好方案

// mapLimit函数实现 使用while 让limit 一直自减
const mapLimit = (list, limit, asyncHandle) => {
    const recursion = () => { //全部的数组
        return asyncHandle(listCopy.shift()).then((res) => { //cb
            if (listCopy.length > 0) {
                return recursion(listCopy)
            }
            return 'finish'
        })
    }
    let asyncList = [];
    let listCopy = [].concat(list); //深拷贝的
    while (limit--) {//保证3个并发
        asyncList.push(recursion())
    }
    return Promise.all(asyncList);
}


var dataLists = [1,2,3,4,5,6,7,8,9,11,100,123];
var count = 0;
mapLimit(dataLists, 3, (curItem)=>{
    // console.log('curItem',curItem)
    return new Promise(resolve => {
        count++
        setTimeout(()=>{
            console.log(curItem, '当前并发量:', count--)
            resolve();
        }, Math.random() * 5000)
    });
}).then(response => {
    console.log('finish', response)
});

//自己的话
// mapLimit函数 接受一个列表 limit 和cb
