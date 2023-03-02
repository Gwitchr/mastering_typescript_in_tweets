class CampoPrivado {
  #id: number;
  constructor(id: number) {
    this.#id = id;
  }
}

let claseCampo = new CampoPrivado(4);
claseCampo.#id = 23;
