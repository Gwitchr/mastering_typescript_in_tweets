var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClaseBaseConMtd = /** @class */ (function () {
    function ClaseBaseConMtd() {
    }
    ClaseBaseConMtd.prototype.alertar = function (texto) {
        console.log("Alerta!: ".concat(texto, " \u26A0\uFE0F"));
    };
    return ClaseBaseConMtd;
}());
// La clase extendida puede hacer un override de los métodos
// de la clase base
var ClaseDerivadaConMtd = /** @class */ (function (_super) {
    __extends(ClaseDerivadaConMtd, _super);
    function ClaseDerivadaConMtd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClaseDerivadaConMtd.prototype.alertar = function (mensaje) {
        _super.prototype.alertar.call(this, mensaje);
        console.log("Hay una alerta nueva: ".concat(mensaje, " \u26A0\uFE0F"));
    };
    return ClaseDerivadaConMtd;
}(ClaseBaseConMtd));
var claseDerivada = new ClaseDerivadaConMtd();
claseDerivada.alertar("Alerta"); // Hay una alerta nueva: Alerta ⚠️
