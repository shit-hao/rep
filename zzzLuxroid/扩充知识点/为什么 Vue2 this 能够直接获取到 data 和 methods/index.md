https://mp.weixin.qq.com/s?__biz=MzA5MjQwMzQyNw==&mid=2650757441&idx=1&sn=3d401646101b7d69b792f2bcb1440fdc&chksm=88665acdbf11d3db240378c7ccde769c7e02d3ca271e1f9f9df28e51b3ceff73cc80f6d712d3&scene=178&cur_album_id=1342211915371675650#rd

因为 initMethod
vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)

initState


proxy(vm, `_data`, key)

function proxy(){
  // xxxxx
  Object.defineProperty(target, key, sharedPropertyDefinition)
  // xxxxx
}
