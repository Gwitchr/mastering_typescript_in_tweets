class ClaseUno {
  id: string;
  metodo() {}
}

interface IDerivadaDeClase extends ClaseUno {
  nombre: string;
}

const objetoEjemplo: IDerivadaDeClase = {
  id: "0",
  metodo: () => {},
  nombre: "Jelipe",
};
