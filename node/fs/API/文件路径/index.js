// console.log(process.cwd());

const fs = require('fs')

// fs.open('sup-text.txt', 'r', (err, fd) => {
//     if (err) throw err;
//     fs.fstat(fd, (err, stat) => {
//       if (err) throw err;
//       // 使用文件属性。
//       console.log(stat)
  
//       // 始终关闭文件描述符！
//       fs.close(fd, (err) => {
//         if (err) throw err;
//       });
//     });
//   });
fs.readFile('sup-text.txt',{encoding:'utf8'},(err,data)=>{
    console.log(data)
})