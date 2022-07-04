Object.fromEntries将二维数组转化为对象
<script>
    //二维数组
    const result = Object.fromEntries([
        ['name','葡葡', '1'],
        ['xueke', 'Java,大数据,前端,云计算']
    ]);
    console.log(result);
    //打印结果：{name："葡葡", xueke: "Java,大数据,前端,云计算"}

    //Map
    const m = new Map();
    m.set('name','PUPU');
    const result = Object.fromEntries(m);
     console.log(result);
     //打印结果：{name："PUPU"}

    //Object.entries ES8将对象转化为二维数组
    const arr = Object.entries({
        name: "葡葡皮皮"
    })
    console.log(arr);
     //打印结果：[[name, "葡葡皮皮"]]
     
</script>

trimStart 和 trimEnd

<script>    
    let str = '   iloveyou   ';
    console.log(str);
    // trim清除字符串空白字符
    console.log(str.trim());
    // trimStart清除字符串左侧空白字符
    console.log(str.trimStart());
    // trimEnd清除字符右左侧空白字符
    console.log(str.trimEnd());
</script>

Array.prototype.flat 与 flatMap

<script>
    //flat 平
    //将多维数组转化为低位数组
    const arr = [1,2,3,4,[5,6]];
    console.log(arr.flat());//[1,2,3,4,5,6]
    const arr = [1,2,3,4,[5,6,[7,8,9]]];
    //参数为深度 是一个数字 不传默认是1
    console.log(arr.flat(2));  

    //flatMap
    //是两个操作的结合，map遍历，flat铺平，多维降为一维
    const arr = [1,2,3,4];
    const result = arr.flatMap(item => [item * 10]);
    console.log(result);//[10,20,30,40]
</script>


Symbol.prototype.description

用来获取Symbol的描述字符串


<script>
    //创建 Symbol
    let s = Symbol('葡葡');
    console.log(s.description); //葡葡 
    
</script>


