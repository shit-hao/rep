CSS3中translate、transform和translation的区别和联系
transition: 允许CSS属性值在一定的时间区间内平滑的过渡，
            需要事件的触发，例如单击、获取焦点、失去焦点等
            transition:property duration timing-function delay;
                   property:CSS的属性，例如：width height 为none时停止所有的运动，可以为transform
                   duration:持续时间
                   timing-function:ease等
                   delay:延迟
                   注意：当property为all的时候所有动画
            例如：transition:width 2s ease 0s;
            http://www.w3cplus.com/content/css3-transition

transform:变形。改变
                 CSS3中主要包括 旋转：rotate() 顺时针旋转给定的角度，允许负值 rotate(30deg)
                   扭曲：skew() 元素翻转给定的角度,根据给定的水平线（X 轴）和垂直线（Y 轴）参数：skew(30deg,20deg)
                   缩放：scale() 放大或缩小，根据给定的宽度（X 轴）和高度（Y 轴）参数： scale(2,4)
                   移动：translate() 平移，传进 x,y值，代表沿x轴和y轴平移的距离
                   所有的2D转换方法组合在一起： matrix()  旋转、缩放、移动以及倾斜元素
                   matrix(scale.x ,, , scale.y , translate.x, translate.y)      
   改变起点位置 transform-origin: bottom left;
   
   综合起来使用：transform: 30deg 1.5 30deg 20deg 100px 200px;

上面都是简单的过渡
div
{
animation: myfirst 5s;
-moz-animation: myfirst 5s;	/* Firefox */
-webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
-o-animation: myfirst 5s;	/* Opera */
}

可以通过在css3中声明keyframes去颗粒化这个动画,实现更精细的控制.
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}

下面是mdn官方文档:
transition属性可以被指定为一个或多个CSS属性的过渡效果，多个属性之间用逗号进行分割。
transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的一个简写属性。

CSStransform属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。
Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。

CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。
