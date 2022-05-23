// function Plugin(options) { }

// Plugin.prototype.apply = function (compiler) {
//     // 所有文件资源都被 loader 处理后触发这个事件
//     compiler.plugin('emit', function (compilation, callback) {
//         // 功能完成后调用 webpack 提供的回调
//         console.log('Hello World')
//         callback()
//     })
// }

// module.exports = Plugin

// 一个js具名函数
function HelloWorldPlugin() {

}

//再函数的protoyupe上定义一个apply方法
HelloWorldPlugin.prototype.apply = function (compiler) {

    //指定一个挂载到webpack自身的事件钩子
    compiler.hooks.emit.tapAsync(
        'HelloWorldPlugin',
        (compilation, callback) => {
          console.log('This is an example plugin!');
          // console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);
  
          // 使用webpack提供的插件API操作构建
          // compilation.addModule(/* ... */);
        
          callback();
        }
      );
}

module.exports = HelloWorldPlugin;