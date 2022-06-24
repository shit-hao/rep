类的私有属性

<script>
    class Person{
        //公有属性
        name;
        //私有属性
        #age;
        #weight;
        //构造方法
        constructor(name, age, weight){
            this.name = name;
            this.#age = age;
            this.#weight = weight;
        }

        intro(){
            console.log(this.name);
            console.log(this.#age);//88
            console.log(this.#weight);//100kg
        }
    }

    //实例化
    const dd = new Person('AA', 88, '100kg');

    console.log(dd.name);
    console.log(dd.#age);//报错
    console.log(dd.#weight);//报错

    girl.intro();
</script>

Promise.allSettled

Promise.allSettled 与 Promise.all ，都应用于批量处理异步任务的一个场景

Promise.allSettled 接受promise数组，返回promise对象，且其结果状态永远成功

<script>
    //声明两个promise对象
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('商品数据 - 1');
        },1000)
    });

    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve('商品数据 - 2');
            reject('出错啦!');
        },1000)
    });

    //调用 allsettled 方法，接受promise数组
    const result = Promise.allSettled([p1, p2]);
    //返回promise对象，且其结果状态永远成功。就算p2是reject
    console.log(result);
    const res = Promise.all([p1, p2]);
     //返回promise对象，且其结果状态由p1p2决定，都成功才成功 
    console.log(res);

</script>

String.prototype.matchAll

String.prototype.matchAll 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

<script>
    let str = `<ul>
        <li>
            <a>肖生克的救赎</a>
            <p>上映日期: 1994-09-10</p>
        </li>
        <li>
            <a>阿甘正传</a>
            <p>上映日期: 1994-07-06</p>
        </li>
    </ul>`;

    //声明正则
    const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg

    //调用方法
    const result = str.matchAll(reg);//返回一个可迭代对象
    
    //对其用for of，可以很方便拿到数组
    for(let v of result){
        console.log(v);
    }

     //对其用...，可以很方便拿到数组
    const arr = [...result];

    console.log(arr);

</script>

选链操作符 ?.

<script>
    // ?.
    function main(config){
        // const dbHost = config && config.db && config.db.host;
        // 层层判断太麻烦了，于是 ？.
        const dbHost = config?.db?.host;

        console.log(dbHost);
    }

    main({
        db: {
            host:'192.168.1.100',
            username: 'root'
        },
        cache: {
            host: '192.168.1.200',
            username:'admin'
        }
    })
</script>

动态 import 导入

ES6模块化里的 import 是静态的，即不能实现懒加载、按需加载

此处的动态 import 可实现懒加载、按需加载，提高加载效率

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>动态 import </title>
</head>
<body>
    <button id="btn">点击</button>
    <script src="./js/app.js" type="module"></script>
</body>
</html>

//app.js
// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function(){
    // 动态 import，返回的是promise对象 
    import('./hello.js').then(module => {
        module.hello();
    });
}

//hello.js
export function hello(){
    alert('Hello');
}

BigInt

把普通值转换成大整型值

<script>
    //大整型
    let n = 521n;
    console.log(n, typeof(n));//521n  "bigint"

    //函数
    let n = 123;
    console.log(BigInt(n));//123n
    console.log(BigInt(1.2));//不可用浮点型来转，会报错

    //运用于：大数值运算
    let max = Number.MAX_SAFE_INTEGER;
    console.log(max);
    console.log(max + 1);
    console.log(max + 2);//此时数值已经无法再增大

    console.log(BigInt(max))
    console.log(BigInt(max) + BigInt(1));
    console.log(BigInt(max) + BigInt(2));//此时数值可以再增大
</script>
globalThis 对象

始终指向全局对象

//globalThis.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>globalThis</title>
</head>
<body>
    <script>
        console.log(globalThis);//window对象
    </script>
</body>
</html>



