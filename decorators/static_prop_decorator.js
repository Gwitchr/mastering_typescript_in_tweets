"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoradorPropEstatica(target, property) {
    if (typeof target === "function") {
        console.log(`nombre de la clase: ${target.name} ⚠️`);
    }
    else {
        console.log(`nombre de la clase: ${target.property.name} ⚠️`);
    }
    console.log(`Nombre de la Propiedad: ${property} ⚠️`);
}
class ClasePropiedadEstatica {
}
__decorate([
    decoradorPropEstatica
], ClasePropiedadEstatica, "propiedad", void 0);
// nombre de la clase: ClasePropiedadEstatica ⚠️
// Nombre de la Propiedad: propiedad ⚠️
