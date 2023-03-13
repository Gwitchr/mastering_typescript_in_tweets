type InfereirTipadoArgFn<T> = T extends (a: infer U) => void ? U : never;
// Si el tipado sustituto T es una función que contiene un argumento,
// Typescript trata de inferir el tipado del argumento y lo asigna a un nuevo
// tipado sustituto llamado U y además lo asigna a nuestro tipado inicial

function pruebaTipadoInferidoArg<T>(arg: InfereirTipadoArgFn<T>) {}

pruebaTipadoInferidoArg<(arg: number) => void>(100);

pruebaTipadoInferidoArg<(arg: string) => void>(100);
