class Animal2 {
  nombre: string | undefined;
  edad: number | undefined;
  gruñido: string | undefined;
  gruñir(): void {
    console.log(`${this.nombre} gruñe: ${this.gruñido} ⚠️`);
  }
}

let miAnimal = new Animal2();

miAnimal.gruñir(); // undefined gruñe: undefined ⚠️

miAnimal.nombre = "🦝";
miAnimal.gruñido = "groooaaaar";

miAnimal.gruñir(); // 🦝 gruñe: groooaaaar ⚠️
