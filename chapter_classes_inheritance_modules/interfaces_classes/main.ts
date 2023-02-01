interface IComun {
  print(): void;
}

function usarPrint(clase: IComun) {
  clase.print();
}

class ClaseA implements IComun {
  print(): void {
    console.log(`Impresión ClaseA ⚠️`);
  }
}

class ClaseB implements IComun {
  print(): void {
    console.log(`Impresión ClaseB ⚠️`);
  }
}

let claseAInst = new ClaseA();
let claseBInst = new ClaseB();

usarPrint(claseAInst); //Impresión ClaseA ⚠️
usarPrint(claseBInst); //Impresión ClaseB ⚠️
