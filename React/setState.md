https://zh-hans.reactjs.org/docs/react-component.html#setstate

setState(updater[, callback]) || setState(stateChange[, callback])
参数一为带有形式参数的 updater 函数：
(state, props) => stateChange

state 是对应用变化时组件状态的引用。当然，它不应直接被修改。你应该使用基于 state 和 props 构建的新对象来表示变化。
例如，假设我们想根据 props.step 来增加 state：

this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
updater 函数中接收的 state 和 props 都保证为最新。
updater 的返回值会与 state 进行浅合并。

setState() 的第二个参数为可选的回调函数，
它将在 setState 完成合并并重新渲染组件后执行。通常，我们建议使用 componentDidUpdate() 来代替此方式

setState(stateChange[, callback])

stateChange 会将传入的对象浅层合并到新的 state 中，例如，调整购物车商品数：

this.setState({quantity: 2})

直接传递对象的话有一个问题
如：
    this.setState({
        quantity: this.state.quantity + 1
    })
    第一调用可能不会有什么问题
    如果多次调用的话
    react由于性能原因,会在一段时间内批处理这些setState,所以this.state.quantity一直没有发生变化
    这种业务场景
    一般推荐使用
    this.setState((state) => {
        return {quantity: state.quantity + 1};
    });




将 setState() 视为请求而不是立即更新组件的命令。为了更好的感知性能，React 会延迟调用它，
然后通过一次传递更新多个组件。React 并不会保证 state 的变更会立即生效。
setState为什么是异步的
比如: 多个组件在同一时间多次调用了setState,如果这时去同步的安排组件同时渲染在大型项目中会影响用户体验
所以需要一个异步的函数在某个时间点统一的去安排页面元素的更新

例如，如果 Parent 和 Child 在同一个 click 事件中都调用了 setState ，这样就可以确保 Child 不会被重新渲染两次。取而代之的是，React 会将该 state “冲洗” 到浏览器事件结束的时候，再统一地进行更新。这种机制可以在大型应用中得到很好的性能提升。

机制有点像vue的$nextTick()

但是，你可能还是会想，为什么 React 不能立即更新 this.state，而不对组件进行重新渲染呢

这样会破坏掉 props 和 state 之间的一致性，造成一些难以 debug 的问题。

为什么不直接给state赋值而要使用setState
直接对this.state赋值没什么作用 官方提示 应该把state作为一个不可变对象
state值会发生变化 但是并不会触发render
所以没啥用 这个操作

要精准的获得setState后的状态 可以使用setState的第二个参数,或者在componentDidUpdate生命周期中使用

除非 shouldComponentUpdate() 返回 false，否则 setState() 将始终执行重新渲染操作