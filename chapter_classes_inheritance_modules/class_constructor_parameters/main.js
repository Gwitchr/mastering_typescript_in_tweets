var ConstructorParams = /** @class */ (function () {
    function ConstructorParams(name, age) {
        this.name = name;
        this.age = age;
    }
    return ConstructorParams;
}());
var miClase = new ConstructorParams("Miguel Hidalgo", 82);
console.log("".concat(miClase.name, " \u26A0\uFE0F"));
//console.log(`${miClase.age} ⚠️`);
