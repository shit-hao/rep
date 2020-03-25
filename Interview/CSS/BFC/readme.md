BFC 是什么呢
先用自己的话说一遍
BFC全称叫块级格式化上下文，可以把它理解为一块独立的区域，BFC外的元素不会影响到内部元素，且BFC里的元素按照
一定的规则排列，比如
1.元素从上到下一个接一个的排列
2.同一个BFC中的元素会发生垂直方向的margin重叠
3.里面的元素不受浮动影响，因此即使有浮动也可以计算到高度，所以BFC可以用来清除浮动
4.每个元素的margin的左边和BFC的左border接触(对于从左到右的格式化)



触发BFC的条件

根元素或其它包含它的元素
overflow不为visible
flat不为none
弹性布局 display:flex
绝对定位元素 position absolute fixed

其中想生成BFC最好的方案是 overflow:hidden 对元素影响最小

BFC可以解决 
margin折叠
浮动