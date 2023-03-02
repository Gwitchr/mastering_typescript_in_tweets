class Concatenador<T extends number[] | string[]> {
  public concatenar(matriz: T): string {
    let cadenas: string[] = [];
    for (let i = 0; i < matriz.length; i++) {
      if (i > 0) {
        cadenas = [...cadenas, ", "];
      }
      cadenas = [...cadenas, matriz[i].toString()];
    }
    return cadenas.join("");
  }
}

const conc = new Concatenador();

const res = conc.concatenar([
  "uno",
  "2",
  "tres",
  "cuatro",
  "cinco",
  "maaaaaaambo 💣",
]);
console.log(`${res} ⚠️`); // uno, 2, tres, cuatro, cinco, maaaaaaambo 💣 ⚠️
const res2 = conc.concatenar([3, 4, 2, 5]);
console.log(`${res2} ⚠️`); // 3, 4, 2, 5 ⚠️
