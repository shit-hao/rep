https://www.zhihu.com/question/309891718?sort=created

Vue 有一种设计层面追求的简洁之美

但是时间长了你会觉得 Vue template 里面有很多 trick 的东西，很多东西都是为了让你看起来很简洁而引入的概念，
以致于过一段时间你再去写 Vue 的时候就需要再学习一遍。像指令、条件语句、事件、语法糖等。
而且在 Vue 模板里面你很难区分纯 HTML 片段和逻辑代码：v-on:click="getMessage"，
这里的 getMessage 到底是字符串还是方法名让人很困惑，当然你用得久了可能也就习惯了，
但是我想说的是一种真正的认知上的简洁，那种类似于只有一种规则的（傻瓜都能理解的）一致性

是响应式编程

Vue更加注重web开发者的习惯

vue 强调可变数据。

React 则是一种数学层面的一致之美

无论你开始使用 JSX 的时候有多反感，用过几次之后你就会觉得特别顺手，因为 JSX 里面除了 expression 就是 function，
没有更复杂的东西。别的东西都可以通过组合而来，你也不用学习很多诡异的写法，直截了当，

React 的特色在于函数式编程的理念和丰富的技术选型
更加面向对象

实现上，Vue跟React的最大区别在于数据的reactivity，就是反应式系统上。
Vue提供反应式的数据，当数据改动时，界面就会自动更新，而React里面需要调用方法SetState。
我把两者分别称为Push-based和Pull-based。所谓Push-based就是说，改动数据之后，数据本身会把这个改动推送出去，
告知渲染系统自动进行渲染。在React里面，它是一个Pull的形式，用户要给系统一个明确的信号说明现在需要重新渲染了，
这个系统才会重新渲染。两者并没有绝对的优劣之分，更多的也是思维模式和开发习惯的不同

是函数式编程

react 强调数据的不可变。

vue和react把模板编译成渲染函数。

react将这个过程直接暴露给了你，就是你写的那个render函数。

Vue比较适合快速迭代的业务需求

React适合更加复杂的灵活度高的系统

Update 2022-1-19

开发者角度讲：
Vue更像是一种约束，你要照着他的文档写v-model,data函数,template等,他关心怎么让开发者开箱即用
而React更加自由，更倾向于提供你一些基础的功能，那么你想实现这些，你就自己组合这些功能就行

比如双向绑定 Vue v-model React value onChange

关于数据方面：Vue是push-base React是pull-base
push的意思是当你改动数据后，这个数据本身会把这个数据的变动 push出去
pull的意思是用户需要给一个sign，告诉用户要给系统一个明确的信号说明现在需要重新渲染了，这个系统才会重新渲染。两者并没有绝对的优劣之分，更多的也是思维模式和开发习惯的不同

