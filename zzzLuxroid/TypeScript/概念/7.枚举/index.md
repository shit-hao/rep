https://www.tslang.cn/docs/handbook/enums.html

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。

# 数字枚举
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

现在， Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。

eg.

enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)

数字枚举可以被混入到 计算过的和常量成员（如下所示）。 简短地说，不带初始化器的枚举或者被放在第一的位置，或者被放在使用了数字常量或其它常量初始化了的枚举后面。 换句话说，下面的情况是不被允许的：

enum E {
    A = getSomeValue(),
    B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
}

# 字符串枚举
字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

# 异构枚举

从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。

# 联合枚举与枚举成员的类型

