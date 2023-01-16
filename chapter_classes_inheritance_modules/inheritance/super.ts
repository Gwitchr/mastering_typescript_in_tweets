class ClaseBaseConstr {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

class ClaseExtendidaConstr extends ClaseBaseConstr {
  name: string;
  constructor(id: string, name: string) {
    super(id); // ejecuta al constructor base
    this.name = name;
  }
}
