enum CASOS {
  PRIMERO,
  SEGUNDO,
}

function casos(val: CASOS): string {
  switch (val) {
    case CASOS.PRIMERO:
      return "primer caso";
    case CASOS.SEGUNDO:
      return "segundo caso";
  }
  let resultado: never = val;

  return resultado;
}
