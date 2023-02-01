class AnimalConstructor {
  nombre: string;
  constructor(nombre: string) {
    //constructor(_nombre: string) {
    // this.nombre = _nombre -> mismo resultado
    this.nombre = nombre;
  }
  graznar(): void {
    console.log(`${this.nombre} dice: Cuack ⚠️`);
  }
}

const miAnimal = new AnimalConstructor("🦩");
miAnimal.graznar(); // 🦩 dice: Cuack ⚠️
