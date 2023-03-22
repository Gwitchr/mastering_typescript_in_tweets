"use strict";
function promesaFallida() {
    return new Promise((_resolve, reject) => {
        console.log(`2 rechazando la promesa  ⚠️`);
        reject();
    });
}
console.log(`1 iniciando... ⚠️`);
promesaFallida()
    .then(() => { })
    .catch(() => console.log(`3 Atrapado 🐛 ⚠️`));
// 1 iniciando... ⚠️
// 2 rechazando la promesa  ⚠️
// 3 Atrapado 🐛 ⚠️
