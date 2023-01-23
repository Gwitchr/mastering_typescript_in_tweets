function verificarNullish(val) {
    return "el valor es ".concat(val !== null && val !== void 0 ? val : "undefined o null");
}
console.log(verificarNullish(1)); // el valor es 1
console.log(verificarNullish(undefined)); // el valor es undefined o null
console.log(verificarNullish(null)); // el valor es undefined o null
