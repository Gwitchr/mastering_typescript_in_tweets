interface IPerroLadron {
  ladrar(): string;
}

interface IImprimirPerroLadron<T extends IPerroLadron> {
  imprimirEnConsola(perro: T): void;
}

class Impresora<T extends IPerroLadron> implements IImprimirPerroLadron<T> {
  imprimirEnConsola(perro: T): void {
    console.log(`${perro.ladrar()} ⚠️`);
  }
}

const dogo: IPerroLadron = {
  ladrar() {
    return `No pus Guau 🐶 ⚠️`;
  },
};

const impresora = new Impresora();
impresora.imprimirEnConsola(dogo); // No pus Guau 🐶 ⚠️ ⚠️
