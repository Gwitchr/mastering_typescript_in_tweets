type InferirMatriz<T> = T extends (infer U)[] ? U : never;

function pruebaTipadoMatriz<T>(arg: InferirMatriz<T>) {}

pruebaTipadoMatriz<number[]>(10);
pruebaTipadoMatriz<number[]>("10");
