interface ICadena {
  a: string;
}

interface IBooleanos {
  a: boolean;
  b: boolean;
}

interface INumeros {
  a: number;
  b: number;
  c: number;
}

type TuplaMagica<T> = T extends ICadena
  ? [string]
  : T extends IBooleanos
  ? [boolean, boolean]
  : T extends INumeros
  ? [number, number, number]
  : never;
