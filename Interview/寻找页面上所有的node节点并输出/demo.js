//主要是有个方法不知道
// document.querySelectorAll('*')
// 下面实现 一遍过
let allList = [].slice.call(document.querySelectorAll('*'))
let obj = {}
allList.forEach(item => {
    let tagName = item.localName
    if(obj[tagName] || obj[tagName] === 0){
        obj[tagName] ++
    }else{
        obj[tagName] = 1
    }
});
console.log(obj)
//这题属实有点傻逼