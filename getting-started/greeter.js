var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello Kol, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World");
console.log(greeter.greet());
// var button = document.createElement('button');
// button.innerText = "Say Hello";
// button.onclick = function () {
//     alert(greeter.greet());
// }
// document.body.appendChild(button);
//# sourceMappingURL=greeter.js.map