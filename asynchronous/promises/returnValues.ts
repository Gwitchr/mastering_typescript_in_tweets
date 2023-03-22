function promesaProductoNumero(fallar: boolean): Promise<number> {
  return new Promise<number>(
    (
      resolve: (valorRetorno: number) => void,
      reject: (codigoError: string) => void
    ) => {
      if (fallar) {
        reject("403");
      }
      resolve(200);
    }
  );
}

console.log(`1.- promesa con producto ⚠️`);
promesaProductoNumero(false)
  .then((codigo) =>
    console.log(`2.- Promesa cumplida con código: ${codigo} ⚠️`)
  )
  .catch((err) => console.log(`esto no se va a ejecutar ⚠️`));

console.log(`1.- promesa con error ⚠️`);
promesaProductoNumero(true)
  .then((codigo) =>
    console.log(`2.- Promesa cumplida con código: ${codigo} ⚠️`)
  )
  .catch((err) => console.log(`Error código: ${err} ⚠️`));

// 1.- promesa con producto ⚠️
// 1.- promesa con error ⚠️
// 2.- Promesa cumplida con código: 200 ⚠️
// Error código: 403 ⚠️
