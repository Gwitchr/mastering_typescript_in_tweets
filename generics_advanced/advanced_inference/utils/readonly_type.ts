interface IInsumo {
  precio: number;
  currency: string;
  nombre: string;
  unidad: string;
}

const calabaza: IInsumo = {
  precio: 12,
  currency: "mxn",
  nombre: "🎃",
  unidad: "kg",
};
const calabazaReadonly: Readonly<IInsumo> = {
  precio: 12,
  currency: "mxn",
  nombre: "🎃",
  unidad: "kg",
};

calabaza.currency = "usd";
calabazaReadonly.currency = "usd";
