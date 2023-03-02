var Impresora = /** @class */ (function () {
    function Impresora() {
    }
    Impresora.prototype.imprimirEnConsola = function (perro) {
        console.log("".concat(perro.ladrar(), " \u26A0\uFE0F"));
    };
    return Impresora;
}());
var dogo = {
    ladrar: function () {
        return "No pus Guau \uD83D\uDC36 \u26A0\uFE0F";
    }
};
var impresora = new Impresora();
impresora.imprimirEnConsola(dogo);
