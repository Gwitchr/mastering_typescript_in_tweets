"use strict";
class AnimalConSetterGetter {
    constructor() {
        this._especie = null;
    }
    get especie() {
        if (!this._especie)
            return "No encontrado";
        return this._especie;
    }
    set especie(especie) {
        this._especie = especie;
    }
}
let miAnimal = new AnimalConSetterGetter();
console.log(`${miAnimal.especie} ⚠️`);
miAnimal.especie = "Tigre 🐅";
console.log(`${miAnimal.especie} ⚠️`);
