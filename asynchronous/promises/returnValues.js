"use strict";
function promesaProductoNumero(fallar) {
    return new Promise((resolve, reject) => {
        if (fallar) {
            reject("403");
        }
        resolve(200);
    });
}
console.log(`1.- promesa con producto ⚠️`);
promesaProductoNumero(false)
    .then((codigo) => console.log(`2.- Promesa cumplida con código: ${codigo} ⚠️`))
    .catch((err) => console.log(`esto no se va a ejecutar ⚠️`));
//1.- promesa con producto ⚠️
//2.- Promesa cumplida con código: 200 ⚠️
console.log(`1.- promesa con error ⚠️`);
promesaProductoNumero(true)
    .then((codigo) => console.log(`2.- Promesa cumplida con código: ${codigo} ⚠️`))
    .catch((err) => console.log(`Error código: ${err} ⚠️`));
