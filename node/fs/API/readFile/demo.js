

const fs = require('fs')


// fs.readFile('../',{encoding:'utf8'},(err,data)=>{
//     console.log(123)
//     console.log(data)
//     console.log(err)
// })

// let stream = fs.createReadStream('sup-text.txt',{encoding:'utf8'})
// console.log(stream)
// console.log(fs.createReadStream('sup-text.txt', { start: 90, end: 99 }));
// 1.打开文件, 没有就创建, 以什么样的形式来打开文件 w:写 r:读
let fd = fs.openSync('sup-text.txt', 'w');

// 2.写入文件,如果要写入文件必须要用 w 方式打开
fs.writeFileSync(fd, "努力学习...");

// 3.关闭文件资源
fs.closeSync(fd);