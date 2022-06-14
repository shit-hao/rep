function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User"];

document.body.innerHTML = greeter(user);

enum Color {Red, Green, Blue}
let c: Color = Color.Green;