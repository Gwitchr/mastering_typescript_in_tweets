interface ISneakerBase {
  talla: number;
}

interface IArticuloLujo {
  firmadoAMano: boolean;
  coleccionPrivada: boolean;
}

interface ISneakerDeLujo extends ISneakerBase, IArticuloLujo {
  precio: number;
}

const tennisCaro: ISneakerDeLujo = {
  talla: 10,
  firmadoAMano: true,
  coleccionPrivada: false,
  precio: 100,
};
