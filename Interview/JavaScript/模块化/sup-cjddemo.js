let count = 1

let setCount = function(newCount){
    count = newCount
    return count
}

module.exports = {
    count:function(){
        return count
    },
    setCount
}