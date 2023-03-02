class ClaseConProteccion {
  protected id: string;
  private nombre: string = "Juan";
  constructor(id: string) {
    this.id = id;
  }
}

class ClaseConAccesoProtegido extends ClaseConProteccion {
  constructor(id: string) {
    super(id);
    console.log(`id base = ${this.id} ⚠️`);
    console.log(`nombre base = ${this.nombre} ⚠️`);
  }
}
