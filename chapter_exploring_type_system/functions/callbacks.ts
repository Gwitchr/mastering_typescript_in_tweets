function callback(msg: string) {
  console.log(`
Callback soy, 
dentro de otra función estoy, 
mi mensaje es: 
${msg}
 ⚠️`);
}

function metodoConCallback(msg: string, cb: (text: string) => void) {
  console.log(`Función principal dice: ${msg} ⚠️`);
  cb(msg);
}

metodoConCallback("🧧", callback);
