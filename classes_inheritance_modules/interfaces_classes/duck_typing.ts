interface IComun {
  print(): void;
}

function usarPrint(clase: IComun) {
  clase.print();
}

class ClaseF implements IComun {
  print(): void {
    console.log(`Impresión ClaseF ⚠️`);
  }
}

class ClaseG {
  print(): void {
    console.log(`Impresión ClaseG ⚠️`);
  }
}

let claseAInst = new ClaseF();
let claseBInst = new ClaseG();

usarPrint(claseAInst); //Impresión ClaseF ⚠️
usarPrint(claseBInst); //Impresión ClaseG ⚠️
