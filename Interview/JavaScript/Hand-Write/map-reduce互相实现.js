Array.prototype._reduce = function (fn) {
    let arr = this
    let tempValue = 0
    let tempArr = arr.map((item, index) => {
        if (!tempValue) {
            tempValue = item
        }
        if (index === 1) {
            tempValue = item
        } else {
            tempValue = fn(tempValue, item)
        }
        console.log(tempValue)
        return tempValue
    })
    return tempArr[tempArr.length - 1]
}


Array.prototype._map = function (fn) {
    let arr = this
    let tempArr = []
    arr.reduce((acc, item, index) => {
        console.log(index)
        tempArr.push(fn(item))
    }, null)
    return tempArr
}


[1, 2, 3].reduce((acc, item) => {
    console.log(`acc${acc}item${item}`)
    return acc + item
})

// easy true