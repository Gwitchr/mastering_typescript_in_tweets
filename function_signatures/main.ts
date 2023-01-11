function aPorBMasC(a: number, b: number, c: number): number {
  return a * b + c;
}

console.log(
  `4 por 12 más 6 es igual a 54? ${
    aPorBMasC(4, 12, 6) === 54 ? "cierto" : "falso"
  } ⚠️`
);
