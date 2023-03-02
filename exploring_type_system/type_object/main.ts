let objetoEstructurado: object = {
  nombre: "objetazo",
  propiedades: {
    id: "1",
    tipado: "objeto",
  },
};

function soloObjetos(a: object) {
  console.log(`${a} ⚠️`);
}

soloObjetos("Cadenacaracteres");
