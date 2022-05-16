// https://juejin.cn/post/6844903929705136141#heading-6
let typeMap = {
  // '[object String]': 'string',
  '[object Date]': 'date',
  '[object Error]': 'error',
  '[object Object]': 'object',
  '[object Array]': 'array',
  '[obejct RegExp]': 'regexp'
}

function $deepClone(data, map = new WeakMap()) {
  let type = typeMap[Object.prototype.toString.call(data)]
  if (type === 'date') {
    return new Date(data)
  } else if (type === 'error') {
    return new Error(data)
  } else if (type === 'object' || type === 'array') {

    let cloneTarget
    type === 'object' ? cloneTarget = {} : type === 'array' ? cloneTarget = [] : ''
    if (map.get(data)) {
      return map.get(data)
    }
    map.set(data, cloneTarget);
    if (type === 'object') {
      Object.keys(data).forEach((item) => {
        cloneTarget[item] = $deepClone(data[item], map)
      })
      return cloneTarget
    } else {
      data.forEach((item) => {
        cloneTarget.push($deepClone(item))
      })
      return cloneTarget
    }
  } else if (type === 'regexp') {
    return new RegExp(data)
  } else {
    return data //基本数据类型
  }
}
// let a = {a:1}
// let b = $deepClone(a)

const target = {
  field1: 1,
  // field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target

$deepClone(target)


// 循环引用问题 ，用深拷贝的对象做key，每次deepCopy对象时看次对象在map中是否为key
