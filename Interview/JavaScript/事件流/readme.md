dom事件流分为3个阶段
1.捕获阶段
2.处理事务
3.冒泡阶段

addEventListener的第三个参数可以指定是捕获还是冒泡
false 冒泡
true 捕获

e.target
执行真正响应事件的dom
e.currentTarget指向事件绑定的dom元素

e.g
 <!-- <ul>
    <li>按钮1</li>
    <li>按钮2</li>
    <li>按钮3</li>
    <li>按钮4</li>
  </ul>

  <script>
    let ul = document.querySelectorAll('ul')[0]
    let aLi = document.querySelectorAll('li')
    ul.addEventListener('click',function(e){
       let oLi1 = e.target  
       let oLi2 = e.currentTarget
       console.log(oLi1)   //  被点击的li
       console.log(oLi2)   // ul
       console.og(oLi1===oLi2)  // false
    })
  </script> -->
  e.target可以用来实现事件委托