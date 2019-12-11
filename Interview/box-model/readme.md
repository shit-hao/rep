盒子模型也是面试中常考的一个点，不管是校招还是社招，写下来巩固一下
盒子模型分为2种，一种是IE模型，一种是W3C模型。

一般的div盒子的控制项为
margin - border - padding - content - padding - border - margin

W3C模型 为
width === content(W3C盒子，也是目前主流的盒子模型)

IE模型 为
width ===  border + padding + content (IE盒子，又称怪异盒模型)

你可以使用box-sizing去指定你的盒子模型

box-sizing: content-box|border-box|inherit;

其中content-box指定为W3C盒子
border-box指定为IE盒子
inherit继承父元素的盒子模型
