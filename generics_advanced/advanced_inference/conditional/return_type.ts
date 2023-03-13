type InferirTipadoFnRetorno<T> = T extends (a: string) => infer U ? U : never;

function pruebaTipadoInferidoRetorno<T>(arg: InferirTipadoFnRetorno<T>) {
  console.log(`El argumento es de tipo ${typeof arg} ⚠️`);
}

pruebaTipadoInferidoRetorno<(a: string) => number>(10);
pruebaTipadoInferidoRetorno<(a: string) => string>(false);
