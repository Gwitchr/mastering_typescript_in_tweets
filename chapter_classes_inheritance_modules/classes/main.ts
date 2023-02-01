class Animal {
  nombre?: string;
  edad?: number;
  gruñido?: string;
  gruñir(): void {
    console.log(`${this.nombre} gruñe: ${this.gruñido} ⚠️`);
  }
}

let animal = new Animal();

animal.gruñir(); // undefined gruñe: undefined ⚠️

animal.nombre = "🦝";
animal.gruñido = "groooaaaar";

animal.gruñir(); // 🦝 gruñe: groooaaaar ⚠️
