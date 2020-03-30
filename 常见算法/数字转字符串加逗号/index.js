
function a(num){
    let arr = String(num).split('')
    arr.forEach((item,index)=>{ //动态改arr
        if(index === 1){
            arr[index] =`,${item}`
        }
        if(index % 3 === 1){
            arr[index] =`,${item}`
        }else{
            arr[index] = item
        }
    })
    console.log(arr.join(''))
}

a(10000000000)