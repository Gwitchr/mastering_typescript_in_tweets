const objetoBase = {
  mensaje: "voy a ser reescrito 😢",
};

const objetoObjetivo = {
  mensaje: "voy a reescribir 😎",
};

const objetoReescrito = { ...objetoBase, ...objetoObjetivo };

console.log(objetoReescrito, ` ⚠️`);
//-> { mensaje: 'voy a reescribir 😎' }  ⚠️
