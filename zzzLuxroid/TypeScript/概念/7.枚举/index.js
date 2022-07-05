var Direction;
(function (Direction) {
    Direction["Up"] = "UP1";
    Direction["Down"] = "DOWN2";
    Direction["Left"] = "LEFT3";
    Direction["Right"] = "RIGH4";
})(Direction || (Direction = {}));
// 现在， Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。
