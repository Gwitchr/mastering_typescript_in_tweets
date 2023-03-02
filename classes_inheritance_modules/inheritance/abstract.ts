abstract class AnimalBase {
  public id: string;
  public reino: string;
  constructor(id: string, reino: string) {
    this.id = id;
    this.reino = reino;
  }
}

class AbejaObrera extends AnimalBase {}

class AbejaReina extends AnimalBase {
  subditos: AbejaObrera[] = [];
}

// al instanciar las clases en automático necesitamos dos argumentos
// como la clase base de la que estamos extendiendo
const abejaReina = new AbejaReina("1", "Animal");
const abejita = new AbejaObrera("902", "Animal");

const abejaBase = new AnimalBase();
