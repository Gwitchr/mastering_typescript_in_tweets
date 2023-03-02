var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.gruñir = function () {
        console.log("".concat(this.nombre, " gru\u00F1e: ").concat(this.gruñido, " \u26A0\uFE0F"));
    };
    return Animal;
}());
var animal = new Animal();
animal.gruñir();
animal.nombre = "🦝";
animal.gruñido = "groooaaaar";
animal.gruñir();
