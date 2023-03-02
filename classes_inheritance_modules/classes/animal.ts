class AnimalDuplicate {
  nombre: string;
  edad: number;
  gruñido: string;
  gruñir(): void {
    console.log(`${this.nombre} gruñe: ${this.gruñido} ⚠️`);
  }
}
