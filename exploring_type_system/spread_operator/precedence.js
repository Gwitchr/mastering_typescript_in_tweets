var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var objetoBase = {
    mensaje: "voy a ser reescrito 😢"
};
var objetoObjetivo = {
    mensaje: "voy a reescribir 😎"
};
var objetoReescrito = __assign(__assign({}, objetoBase), objetoObjetivo);
console.log(objetoReescrito, " \u26A0\uFE0F");
