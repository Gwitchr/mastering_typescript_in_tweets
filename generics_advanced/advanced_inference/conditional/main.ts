type MatrizStringsONumero<T> = T extends number ? number : string[];

function usarMatrizONumero<T>(arg: MatrizStringsONumero<T>): number | string[] {
  if (typeof arg === "number") {
    return arg * 2;
  }
  return arg;
}

usarMatrizONumero<number>(2);
usarMatrizONumero<string[]>(["🦖", "🦕"]);
usarMatrizONumero<boolean>(true);

usarMatrizONumero<boolean>(["verdadero", "cierto", "correcto"]);
