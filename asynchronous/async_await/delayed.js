"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promesaFallida = exports.promesaTardia = void 0;
function promesaTardia() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log(`Promesa resuelta después de 1000ms 😎 ⚠️`);
            resolve();
        }, 1000);
    });
}
exports.promesaTardia = promesaTardia;
function promesaFallida() {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            console.log(`Promesa fallida después de 1000ms 😭 ⚠️`);
            reject("muy mal");
        }, 1000);
    });
}
exports.promesaFallida = promesaFallida;
