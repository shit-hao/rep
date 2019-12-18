读文件有2个方式
fs.readFile(path[, options], callback) //异步
    path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
    options <Object> | <string>

    encoding <string> | <null> 默认值: null。
    flag <string> 参阅支持的文件系统标志。默认值: 'r'。
    callback <Function>

    err <Error>
    data <string> | <Buffer>
    异步地读取文件的全部内容。
    示例
        fs.readFile('/etc/passwd', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    回调会传入两个参数 (err, data)，其中 data 是文件的内容。

    如果没有指定 encoding，则返回原始的 buffer。
    如果 options 是字符串，则它指定字符编码：
    fs.readFile('/etc/passwd', 'utf8', callback);
    当 path 是目录时， fs.readFile() 与 fs.readFileSync() 的行为是特定于平台的。 在 macOS、Linux 和 Windows 上，将返回错误。 在 FreeBSD 上，将返回目录内容的表示。
    // 在 macOS、Linux 和 Windows 上：
    fs.readFile('<目录>', (err, data) => {
    // => [Error: EISDIR: illegal operation on a directory, read <目录>]
    });

    // 在 FreeBSD 上：
    fs.readFile('<目录>', (err, data) => {
    // => null, <data>
    });
    fs.readFile() 函数会缓冲整个文件。 为了最小化内存成本，尽可能通过 fs.createReadStream() 进行流式传输。



fs.readFileSync(path[, options]) //同步
    path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
    options <Object> | <string>

    encoding <string> | <null> 默认值: null。
    flag <string> 参阅支持的文件系统标志。默认值: 'r'。
    返回: <string> | <Buffer>