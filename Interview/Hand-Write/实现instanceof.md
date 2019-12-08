function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
        if (left === null)
            return false
        if (prototype === left)
            return true
        left = left.__proto__
    }
}
原理 instanceof是在原型链上做的查找 所以并不靠谱
