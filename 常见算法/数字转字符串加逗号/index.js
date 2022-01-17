
function a(num) {
    let arr = String(num).split('').reverse()

    arr.forEach((item, index) => { //动态改arr
        if (index % 3 === 2) {
            // console.log('index')
            // console.log(index)
            arr[index] = `${item}-`
        } else {
            arr[index] = item
        }
        // if (index === 1) {
        //     arr[index] = `${item}`
        // }
    })
    console.log('arr')
    console.log(arr)
    console.log(arr.reverse())
    // console.log(arr.reverse().join(''))
}

a(10000000000)
// 2 5 8