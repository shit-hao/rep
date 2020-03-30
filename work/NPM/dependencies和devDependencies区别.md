https://www.jianshu.com/p/de3f9a53d2a9
dependencies是什么呢？ 生产环境。
devdependencies是什么呢？ 开发环境。
网上也可以查到很多资料，大概回答意思是，我们搭建一个webpack+react+es6的项目，像webpack babel这种负责打包编译的，我们就应该装在开发环境，像react之类的装在生产环境。
可是为什么呢？
我们不能告诉我们这样做，我们就只这样做，我们要知之其所以然呀。
恩。我试着吧react放进了dependencies，打包出来的文件依然可以运行，并没有什么问题。
why ？？？难道文档只是建议而已吗？？？


如果我们只是单纯的做项目，那么我们可简单地认为生产环境和开发环境做为一种友善的提示，实质没有什么区别；
但是，如果在发布npm包的时候，两种环境安装方式是有很大区别的！！！

所以，在发布npm包的时候，本身dependencies下的模块会作为依赖，一起被下载；devDependencies下面的模块就不会自动下载了；但对于项目而言，npm install 会自动下载devDependencies和dependencies下面的模块。
