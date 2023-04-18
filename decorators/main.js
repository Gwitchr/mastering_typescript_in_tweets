"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaseConMultiplesDecoradores = exports.ClaseConDecorador = void 0;
function decoradorSimple(constructor) {
    console.log(`Decorador simple ejecutado ⚠️`);
}
function segundoDecorador(constructor) {
    console.log(`Segundo Decorador ejecutado ⚠️`);
}
let ClaseConDecorador = class ClaseConDecorador {
};
ClaseConDecorador = __decorate([
    decoradorSimple
], ClaseConDecorador);
exports.ClaseConDecorador = ClaseConDecorador;
// Decorador simple ejecutado ⚠️
let ClaseConMultiplesDecoradores = class ClaseConMultiplesDecoradores {
};
ClaseConMultiplesDecoradores = __decorate([
    decoradorSimple,
    segundoDecorador
], ClaseConMultiplesDecoradores);
exports.ClaseConMultiplesDecoradores = ClaseConMultiplesDecoradores;
// Decorador simple ejecutado ⚠️
// Segundo Decorador ejecutado ⚠️
