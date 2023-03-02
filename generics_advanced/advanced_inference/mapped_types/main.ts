interface IObligatorios {
  prop1: string;
  prop2: number;
  prop3: boolean;
}

type TipadoDebil<T> = {
  [K in keyof T]?: T[K];
};

const opcionales: TipadoDebil<IObligatorios> = {};
