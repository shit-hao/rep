UDP本身是无连接的、没有建链和拆链成本
UDP的数据包无队头阻塞问题
UDP改造成本小

为什么http3.0选择了udp作为传输层
1.要改造tcp历史包袱过重
2.TCP协议栈是Linux内部的重要部分，修改和升级成本很大

综合而知，谷歌决定在UDP基础上改造一个具备TCP协议优点的新协议也就顺理成章了，这个新协议就是QUIC协议。

https://cloud.tencent.com/developer/article/1701999

https://cloud.tencent.com/developer/article/1405624