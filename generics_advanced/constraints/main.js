var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Concatenador = /** @class */ (function () {
    function Concatenador() {
    }
    Concatenador.prototype.concatenar = function (matriz) {
        var cadenas = [];
        for (var i = 0; i < matriz.length; i++) {
            if (i > 0) {
                cadenas = __spreadArray(__spreadArray([], cadenas, true), [", "], false);
            }
            cadenas = __spreadArray(__spreadArray([], cadenas, true), [matriz[i].toString()], false);
        }
        return cadenas.join("");
    };
    return Concatenador;
}());
var conc = new Concatenador();
var res = conc.concatenar([
    "uno",
    "2",
    "tres",
    "cuatro",
    "cinco",
    "maaaaaaambo 💣",
]);
console.log("".concat(res, " \u26A0\uFE0F"));
var res2 = conc.concatenar([3, 4, 2, 5]);
console.log("".concat(res2, " \u26A0\uFE0F"));
