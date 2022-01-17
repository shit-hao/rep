Map 类似对象
Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
和Obj的区别

一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。
Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。
Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。虽然 ES5 开始可以用 map = Object.create(null) 来创建一个没有原型的对象，但是这种用法不太常见。
Map 在涉及频繁增删键值对的场景下会有些性能优势。
属性
Map.length
属性 length 的值为 0 。
get Map[@@species]
本构造函数用于创建派生对象。
Map.prototype
表示 Map 构造器的原型。 允许添加属性从而应用于所有的 Map 对象。
Map 实例
所有的 Map 对象实例都会继承 Map.prototype。

属性
Map.prototype.constructor
返回一个函数，它创建了实例的原型。默认是Map函数。
Map.prototype.size
返回Map对象的键/值对的数量。
方法
Map.prototype.clear()
移除Map对象的所有键/值对 。
Map.prototype.delete(key)
如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false
Map.prototype.entries()
返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
Map.prototype.forEach(callbackFn[, thisArg])
按插入顺序，为 Map对象里的每一键值对调用一次callbackFn函数。如果为forEach提供了thisArg，它将在每次回调中作为this值。
Map.prototype.get(key)
返回键对应的值，如果不存在，则返回undefined。
Map.prototype.has(key)
返回一个布尔值，表示Map实例是否包含键对应的值。
Map.prototype.keys()
返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 。
Map.prototype.set(key, value)
设置Map对象中键的值。返回该Map对象。
Map.prototype.values()
返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 。
Map.prototype[@@iterator]()
返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。



Set 类似数组
 Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。成员唯一

WeakSet 对象允许你将弱引用对象存储在一个集合中。
WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次.
WeakSet 对象允许将弱引用对象储存在一个集合中。什么是弱引用对象？就是：垃圾回收机制不考虑对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象是否还在该弱引用的结构中。要注意的是，弱引用的对象不可遍历


它和 Set 对象的区别有两点:

WeakSet 对象中只能存放对象引用, 不能存放值, 而 Set 对象都可以.
WeakSet 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素.

WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。