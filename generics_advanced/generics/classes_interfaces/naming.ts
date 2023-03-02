interface InterfazA {
  ladrar(): string;
}

interface InterfazB<X extends InterfazA> {
  imprimirEnConsola(perro: X): void;
}

class Clase<Y extends InterfazA> implements InterfazB<Y> {
  imprimirEnConsola(perro: Y): void {
    console.log(`${perro.ladrar()} ⚠️`);
  }
}

const dogo: InterfazA = {
  ladrar() {
    return `No pus Guau 🐶 ⚠️`;
  },
};

const impresora = new Clase();
impresora.imprimirEnConsola(dogo); // No pus Guau 🐶 ⚠️ ⚠️
