abstract class AnimalBase {
  private reino = "animal";
  public id: string;
  public clase: string;
  abstract trabajar(): void;
  constructor(id: string, clase: string) {
    this.clase = clase;
    this.id = id;
  }
}

class AbejaObrera extends AnimalBase {
  trabajar(): void {
    console.log(`Este animal ${this.clase} dice: Ahora estoy trabajando  ⚠️`);
  }
}

class AbejaReina extends AbejaObrera {
  public subditos: AbejaObrera[] = [];
  administrarReino(): void {
    super.trabajar();
    for (let abeja of this.subditos) {
      abeja.trabajar();
    }
  }
}

const abeja1 = new AbejaObrera("1", "🐝");
const abejaReina = new AbejaReina("0", "🐝");

abeja1.trabajar();
