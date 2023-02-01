var ClasePropiedadesEstaticas = /** @class */ (function () {
    function ClasePropiedadesEstaticas() {
    }
    ClasePropiedadesEstaticas.prototype.sumarContador = function () {
        ClasePropiedadesEstaticas.contador++;
    };
    ClasePropiedadesEstaticas.contador = 0;
    return ClasePropiedadesEstaticas;
}());
var instancia1 = new ClasePropiedadesEstaticas();
var instancia2 = new ClasePropiedadesEstaticas();
console.log("\uD83D\uDC49\uD83C\uDFFC ".concat(ClasePropiedadesEstaticas.contador, " \u26A0\uFE0F")); //
instancia1.sumarContador();
console.log("\uD83D\uDC49\uD83C\uDFFC ".concat(ClasePropiedadesEstaticas.contador, " \u26A0\uFE0F"));
instancia2.sumarContador();
console.log("\uD83D\uDC49\uD83C\uDFFC ".concat(ClasePropiedadesEstaticas.contador, " \u26A0\uFE0F"));
