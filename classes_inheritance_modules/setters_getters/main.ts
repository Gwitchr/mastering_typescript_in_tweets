class AnimalConSetterGetter {
  private _especie: string | null = null;
  get especie(): string {
    if (!this._especie) return "No encontrado";
    return this._especie;
  }
  set especie(especie: string) {
    this._especie = especie;
  }
}

let miAnimal = new AnimalConSetterGetter();

console.log(`${miAnimal.especie} ⚠️`); // No encontrado ⚠️
miAnimal.especie = "Tigre 🐅";
console.log(`${miAnimal.especie} ⚠️`); // Tigre 🐅 ⚠️
