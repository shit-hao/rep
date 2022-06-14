function greeter(person) {
    return "Hello, " + person;
}
var user = ["Jane User"];
document.body.innerHTML = greeter(user);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

console.log('Color')
console.log(Color)
