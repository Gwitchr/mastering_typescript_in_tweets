"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const instancia1 = new main_1.ClaseConDecorador();
const instancia2 = new main_1.ClaseConDecorador();
console.log(`${JSON.stringify(instancia1)} ⚠️`);
console.log(`${JSON.stringify(instancia2)} ⚠️`);
// Decorador simple ejecutado ⚠️
// {} ⚠️
// {} ⚠️
