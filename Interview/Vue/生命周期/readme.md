Vue生命周期 
beforeCreate 
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed


beforeCreate:{
    组件创建之前
    啥都没
}
created:{
    已经和数据绑定，可以操作数据 比如网络请求 赋值
    el选项是空
}

beforeMount：{
    已经初步渲染完成dom
    但是data还没有插入
}

mounted：{
    data已经插入真实的dom
}