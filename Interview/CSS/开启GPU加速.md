<!-- https://www.jianshu.com/p/769c4682ff00 -->
<!-- https://www.cnblogs.com/PeunZhang/p/3510083.html -->
translateZ或者rotateZ都可以开启
通过-webkit-transform:transition3d/translateZ开启GPU硬件加速之后，有些时候可能会导致浏览器频繁闪烁或抖动，可以尝试以下办法解决之：
-webkit-backface-visibility:hidden;
-webkit-perspective:1000;

3d变换都可以开启GPU加速

如果你的样式不需要3D变换 你可以手动的translateZ(0)来开启或者translate3d(0, 0, 0);都可以手动的开启
