interface IZapatoBase {
  marca: string;
  talla: number;
}

interface IZapatoDeportivo extends IZapatoBase {
  zuelaPlastica: boolean;
}

const airForce: IZapatoDeportivo = {
  marca: "🕊️ita",
  talla: 10,
  //zuelaPlastica:true
};
