插件是自包含的代码，通常向 Vue 添加全局级功能。它可以是公开 install() 方法的 object，也可以是 function

插件的功能范围没有严格的限制——一般有下面几种：

1.添加全局方法或者 property。如：vue-custom-element

2.添加全局资源：指令/过渡等。如：vue-touch）

3.通过全局 mixin 来添加一些组件选项。(如vue-router)

4.添加全局实例方法，通过把它们添加到 config.globalProperties 上实现。

5.一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router


#编写插件

为了更好地理解如何创建自己的 Vue.js 版插件，我们将创建一个非常简化的插件版本，它显示 i18n 准备好的字符串。

每当这个插件被添加到应用程序中时，如果它是一个对象，就会调用 install 方法。如果它是一个 function，则函数本身将被调用。在这两种情况下——它都会收到两个参数：由 Vue 的 createApp 生成的 app 对象和用户传入的选项。

让我们从设置插件对象开始。建议在单独的文件中创建它并将其导出，如下所示，以保持包含的逻辑和分离的逻辑。

// plugins/i18n.js
export default {
  install: (app, options) => {
    // Plugin code goes here
  }
}


我们想要一个函数来翻译整个应用程序可用的键，因此我们将使用 app.config.globalProperties 暴露它。

该函数将接收一个 key 字符串，我们将使用它在用户提供的选项中查找转换后的字符串。

// plugins/i18n.js
export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = key => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}