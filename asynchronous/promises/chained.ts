function readFileP(fileName: string): Promise<unknown> {
  return Promise.resolve(fileName);
  // leer un archivo con el sistema de lectura del sistema
}
function handleErrorr(e: Error) {}

function promesasConcatenadas() {
  readFileP("archivo1.txt")
    .then((fileName) => {
      console.log(`${fileName} leído exitosamente ⚠️`);
      return readFileP("archivo2.txt");
    })
    .then((fileName) => {
      console.log(`${fileName} leído exitosamente ⚠️`);
      return readFileP("archivo3.txt");
    })
    .catch((err) => {
      handleError(err);
    })
    .finally(() => {
      console.log(`Éxito! ⚠️`);
    });
}
