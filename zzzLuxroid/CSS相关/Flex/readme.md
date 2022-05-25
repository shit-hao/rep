flex 布局

flex默认值 flex-grow: 0 flex-shrink: 1 flex-basis: auto

order属性定义项目的排列顺序。数值越小（包含负值），排列越靠前，默认为0。

语法
/* Basic values */
flex: auto;
flex: initial;
flex: none;
flex: 2;

/* One value, unitless number: flex-grow */
/* 1个值, 无单位数字,flex-grow */
<!-- 一个无单位数(<number>): 
它会被当作flex:<number> 1 0; <flex-shrink>的值被假定为1，然后<flex-basis> 的值被假定为0 -->
flex: 2;

/* One value, width/height: flex-basis */
/* 1个值, 宽/高,flex-grow */
flex: 10em;
flex: 30px;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;

flex的几个属性

flex-basis
flex-direction
    指定主轴方向
flex-flow 
    CSS flex-flow 属性是 flex-direction 和 flex-wrap 的简写。
flex-grow
    CSS flex-grow 属性定义弹性盒子项（flex item）的拉伸因子。
flex-shrink
    CSS flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
flex-wrap
    flex-wrap: nowrap;  /* Default value */ flex 的元素被摆放到到一行，这可能导致溢出 flex 容器。 cross-start  会根据 flex-direction 的值 相当于 start 或 before。
    flex-wrap: wrap; //flex 元素 被打断到多个行中。cross-start 会根据 flex-direction 的值选择等于start 或before。cross-end 为确定的 cross-start 的另一端。
    flex-wrap: wrap-reverse; //和 wrap 的行为一样，但是 cross-start 和 cross-end 互换。
    CSS flex-wrap 指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向。
order
    CSS order 属性规定了弹性容器中的可伸缩项目在布局时的顺序。元素按照 order 属性的值的增序进行布局。拥有相同 order 属性值的元素按照它们在源代码中出现的顺序进行布局。

ps:
    定义了flex 的父元素的每个子元素的flex-shrink默认都为1
    所以 当子块宽度和大于父块宽度时 都等比例缩小

注意: flex-shrink只会在 flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。


flex: 1;
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选

Note: 当一个元素同时被设置了 flex-basis (除值为 auto 外) 和 width (或者在 flex-direction: column 情况下设置了height) , flex-basis 具有更高的优先级.