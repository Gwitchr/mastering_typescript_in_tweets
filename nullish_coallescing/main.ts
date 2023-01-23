function verificarNullish(val: number | null | undefined) {
  return `el valor es ${val ?? "undefined o null"}`;
}

console.log(verificarNullish(1)); // el valor es 1
console.log(verificarNullish(undefined)); // el valor es undefined o null
console.log(verificarNullish(null)); // el valor es undefined o null
