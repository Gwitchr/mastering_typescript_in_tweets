let seraUnNumero: null | number = null;

function asignarNumero(val?: number) {
  if (val) {
    seraUnNumero = val;
  }
}

asignarNumero();
asignarNumero(3);
