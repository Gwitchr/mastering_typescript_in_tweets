class PrivadaPublica {
  public especie: string;
  private name: string | undefined;
  constructor(especie: string) {
    this.especie = especie;
  }
  identificar() {
    console.log(`${this.name || "Solovino"} de la especie ${this.especie} ⚠️`);
  }
}

let miClase = new PrivadaPublica("tigre");
miClase.name = "Hobbes";
