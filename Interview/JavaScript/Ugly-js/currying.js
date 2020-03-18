
let addCurrying = function(x){
    return function(y){
        return addCurrying(x+y)
    }
}

addCurrying.prototype.toString = ()=>{
    console.log(234)
}

addCurrying(1)(2)(3)(4)