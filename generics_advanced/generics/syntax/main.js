function imprimirGenerico(valor) {
    console.log("El tipado de T es ".concat(typeof valor, " \u26A0\uFE0F"));
    console.log("El valor de T es ".concat(valor, " \u26A0\uFE0F"));
}
imprimirGenerico("1");
imprimirGenerico(1);
imprimirGenerico(true);
imprimirGenerico({ marca: "genérica" });
imprimirGenerico(function () { });
