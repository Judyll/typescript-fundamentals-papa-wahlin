class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello Kol, " + this.greeting;
    }
}

var greeter = new Greeter("World");

console.log(greeter.greet());

// var button = document.createElement('button');
// button.innerText = "Say Hello";
// button.onclick = function () {
//     alert(greeter.greet());
// }

// document.body.appendChild(button);