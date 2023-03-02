class ClaseBaseConMtd {
  alertar(texto: string) {
    console.log(`Alerta!: ${texto} ⚠️`);
  }
}

// La clase extendida puede hacer un override de los métodos
// de la clase base
class ClaseDerivadaConMtd extends ClaseBaseConMtd {
  alertar(mensaje: string) {
    //Se puede acceder al método original con la palabra súper
    super.alertar(mensaje);
    console.log(`Hay una alerta nueva: ${mensaje} ⚠️`);
  }
}

const claseDerivada = new ClaseDerivadaConMtd();
claseDerivada.alertar("Alerta");
// Alerta!: Alerta ⚠️
// Hay una alerta nueva: Alerta ⚠️
