type NumeroIndefinido = number | undefined;

function verificarUndefined(el: NumeroIndefinido) {
  if (el === undefined) {
    return;
  }
  console.log(`${el} ⚠️`);
}

function imprimirElementosMatriz(matriz: NumeroIndefinido[]) {
  for (let i = 0; i < matriz.length; i++) {
    verificarUndefined(matriz[i]);
  }
}

const matrizNumerica = [1, 2, 4, 5];

delete matrizNumerica[0];

imprimirElementosMatriz(matrizNumerica);
