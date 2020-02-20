let i = 0//调用方法的次数
let ri = 0//正式渲染的次数

function getData(i) { //网络请求
    let time = 3000 //第一次3秒回来
    if(i === 1){//第一次
        time = 3000
    }else {//后面
        time = 1000
    }
    new Promise((res,rej)=>{
        setTimeout(()=>{
            if(i >= ri){ //当前拉的请求>真实渲染的网络请求
                ri ++ 
                res(time)
            }else {
                rej(time)
            }
        },time) //时间第一次长,第二次慢,保证二者顺序,
    }).then((res)=>{
        console.log('现在是'+res)
    }).catch((reason)=>{
        console.log('fail'+reason)
    })
}

setInterval(() => {
    i++ //每次进来调用方法的次数+1
    getData(i)
}, 1 * 1000)