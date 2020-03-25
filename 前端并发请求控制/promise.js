const mapLimit = (list, limit, asyncHandle) => {
    const recursion = (arr) => {
        return asyncHandle(arr.shift()).then((res) => {
            // console.log('data', res);
            if (arr.length > 0) {
                return recursion(arr)
            }
            return 'finish'
        })
    }
    let asyncList = [];
    let listCopy = [].concat(list);
    while (limit--) {
        asyncList.push(recursion(listCopy))
    }
    return Promise.all(asyncList);
}


var dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123];
var count = 0;
mapLimit(dataLists, 3, (curItem) => {
    return new Promise(resolve => {
        // count++
        setTimeout(() => {
            // console.log(curItem, '当前并发量:', count--)
            resolve();
        }, Math.random() * 5000)
    });
}).then(response => {
    console.log('finish', response)
});