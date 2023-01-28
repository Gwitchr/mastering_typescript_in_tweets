function sumarUniones(a: string | number, b: number) {
  return a + b;
}

function izquierdaAcolchada(acolchado: string | number, num: number) {
  if (typeof acolchado === "number") {
    return `${" ".repeat(acolchado)}${num}`;
  }
  return `${acolchado}${num}`;
}
