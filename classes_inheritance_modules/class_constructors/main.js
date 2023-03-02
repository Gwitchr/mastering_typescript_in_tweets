var AnimalConstructor = /** @class */ (function () {
    function AnimalConstructor(nombre) {
        this.nombre = nombre;
    }
    AnimalConstructor.prototype.graznar = function () {
        console.log("".concat(this.nombre, " dice: Cuack \u26A0\uFE0F"));
    };
    return AnimalConstructor;
}());
var miAnimal = new AnimalConstructor("🦩");
miAnimal.graznar();
