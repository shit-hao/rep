npm 会把所有下载的包，保存在用户文件夹下面。

默认值：~/.npm在Posix上 或 %AppData%/npm-cache在Windows上。根缓存文件夹。

npm install 之后会计算每个包的 sha1 值(PS:安全散列算法(Secure Hash Algorithm))，然后将包与他的 sha1 值关联保存在 package-lock.json 里面，下次 npm install 时，会根据 package-lock.json 里面保存的 sha1 值去文件夹里面寻找包文件，如果找到就不用从新下载安装了。

npm cache verify
上面这个命令是重新计算，磁盘文件是否与 sha1 值匹配，如果不匹配可能删除。

要对现有缓存内容运行脱机验证，请使用 npm cache verify。

npm cache clean --force
上面这个命令是删除磁盘所有缓存文件。