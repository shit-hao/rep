function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}
function $deepClone(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }
  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push($deepClone(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = $deepClone(data[i]);
    }
  }
  return o;
}
JSON.stringify 和 JSON.parse 也可以实现简单的深拷贝
但是会存在一些问题
比如：
1. undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略

2. Date 日期调用了 toJSON() 将其转换为了 string 字符串（Date.toISOString()），因此会被当做字符串处理。

3. NaN 和 Infinity 格式的数值及 null 都会被当做 null。

4. 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

5. 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。