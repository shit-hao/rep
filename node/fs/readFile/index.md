https://itbilu.com/nodejs/core/4kSWXYWGg.html

不使用流的情况下 有2种方式可以读文件
fs.read()
fs.read(fd, buffer, offset, length, position, callback)
从文件描述符fd中读取文件数据。

    buffer是一个缓冲区，读取的数据将会写入到这里。

    offset是开始向缓冲区 buffer 写入数据时的偏移量。

    length是一个整型值，指定了读取的字节数。

    position是一个整型值，指读取的文件起始位置，如果position为null，将会从文件当前的位置读取数据。

    callback中回调函数，其中包含了三个参数(err, bytesRead, buffer)，分别表示：错误、读取的字节数、缓冲区。

    使用fs.read()方法读取文件内容时，首先需要一个文件描述符fd，创建文件描述符fd可以使用fs.open()方法。

    fs.read()方法可以实现部分文件内容的读取。通过length和position参数可以指定读取文件内容的长度和读取内容的起始位置

fs.readFile()
fs.readFile(filename[, options], callback)
    读取文件的全部内容

    filename要读取的文件。

    options一个包含以下可选值的对象

    encoding {String | Null} 默认：'utf8'
    mode {Number} 默认：438 (aka 0666 in Octal)
    flag {String} 默认：'w'

    callback回调函数有2个参数 (err, data)，参数 data 是文件的内容。如果没有指定参数encoding, 则返回值为Buffer。

    fs.readFile()方法能且只能读取文件的全部内容，通过设置编码方式可以以字符串或Buffer的形式返回读结果。

2个方法的区别
    从本质上讲，fs.readFile()方法是对fs.read()方法的进一步封装，fs.readFile()方法可以方便的读取文件的全部内容。
    使用fs.readFile()方法读/etc/passwd文件全部内容：
    fs.readFile('/etc/passwd', function(err, data){ 
    //文件内容
    console.log(data.toString());
})
相比fs.readFile()方法，使用fs.read()方法读取文件的全部内容就要复杂的多。首先要用fs.stat或fs.fstat判断文件的大小，然后使用fs.open()创建文件描述符，最后再使用fs.read()方法读取文件内容。

使用fs.read()方法读/etc/passwd文件全部内容：

    fs.stat('/etc/passwd', function(err, stat) {
    if(stat&&stat.isFile()){
	fs.open('/etc/passwd', 'r', function(err, fd){
	    //创建一个与文件大小相同的缓冲区
	    var readBuffer = new Buffer(stat.size);
	    var len = stat.size;
	    var offset = 0;
	    var filePostion = 0;
	    fs.read(fd, readBuffer, offset, len, filePostion, function(err, readByte, readResult){
	        //文件内容
                console.log(readResult.toString());
            });
	});
     }
})