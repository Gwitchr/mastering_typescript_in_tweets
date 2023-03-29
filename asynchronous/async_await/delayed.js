"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promesaTardia = void 0;
function promesaTardia() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log(`Promesa resuelta desupués de 1000ms 😎 ⚠️`);
            resolve();
        }, 1000);
    });
}
exports.promesaTardia = promesaTardia;
