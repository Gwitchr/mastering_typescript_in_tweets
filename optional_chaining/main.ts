const objetoSeguro = {
  existo: true,
  noExisto: {
    posiblemente: true,
  },
};

const propiedadExistente = objetoSeguro?.noExisto?.posiblemente;
