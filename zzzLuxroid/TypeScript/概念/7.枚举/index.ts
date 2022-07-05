enum Direction {
  Up = "UP1",
  Down = "DOWN2",
  Left = "LEFT3",
  Right = "RIGH4",
}

// 现在， Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。