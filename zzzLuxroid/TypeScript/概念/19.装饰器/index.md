https://zhuanlan.zhihu.com/p/406862320

装饰器
介绍
随着TypeScript和ES6里引入了类，在一些场景下我们需要额外的特性来支持标注或修改类及其成员。 装饰器（Decorators）为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。 Javascript里的装饰器目前处在 建议征集的第二阶段，但在TypeScript里已做为一项实验性特性予以支持。

class Person {
  static x: 6
  intro() {
    console.log("我是一个帅逼");
  }
}

装饰器模式

在正式聊装饰器之前，先说说装饰器模式，装饰器模式的特点是：在不改变对象自身结构的前提下，向对象添加新的功能。
举个 ，一个人，可以在冬天的时穿羽绒服，也可以在下雨天套上雨衣。所有这些外在的服装并没有改变人的本质，但是它们却拓展了人的基本抗性。

class Person {
  intro() {
    console.log("我是一个帅逼");
  }
}
new Person().intro(); // 我是一个帅逼

// 获取原本的行为
const origin1 = Person.prototype.intro;

// 添加羽绒服
Person.prototype.intro = function () {
  origin1.call(this);
  console.log("我穿了一件羽绒服");
};
new Person().intro(); // 我是一个帅逼，我穿了一件羽绒服

// 获取原本的行为，这里的行为已经是被装饰过的
const origin2 = Person.prototype.intro;

// 添加雨衣
Person.prototype.intro = function () {
  origin2.call(this);
  console.log("我穿了一件雨衣");
};
new Person().intro(); // 我是一个帅逼，我穿了一件羽绒服，我穿了一件羽雨衣

这个过程就像是俄罗斯套娃一样，我们没有改变原本的功能，而是为它包装了一层新的功能。


function wearDownCoat(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const origin = descriptor.value;
  descriptor.value = function () {
    origin.call(this);
    console.log("我穿了一件羽绒服");
  };
}

function wearRainCoat(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const origin = descriptor.value;
  descriptor.value = function () {
    origin.call(this);
    console.log("我穿了一件雨衣");
  };
}

class Person {
  // 这就是装饰器，很简洁有木有 
  @wearRainCoat
  @wearDownCoat
  intro() {
    console.log("我是一个帅逼");
  }
}

new Person().intro(); // 我是一个帅逼，我穿了一件羽绒服，我穿了一件羽雨衣

// 类装饰器
// 属性装饰器
// 方法装饰器
// 方法参数装饰器
// 访问器装饰器

装饰器求值

类中不同声明上的装饰器将按以下规定的顺序应用：

1.参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员。
2.参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员。
3.参数装饰器应用到构造函数。
4.类装饰器应用到类。