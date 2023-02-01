class ClasePropiedadesEstaticas {
  static contador = 0;
  sumarContador() {
    ClasePropiedadesEstaticas.contador++;
  }
}

let instancia1 = new ClasePropiedadesEstaticas();
let instancia2 = new ClasePropiedadesEstaticas();

console.log(`👉🏼 ${ClasePropiedadesEstaticas.contador} ⚠️`); // 👉🏼 0 ⚠️

instancia1.sumarContador();
console.log(`👉🏼 ${ClasePropiedadesEstaticas.contador} ⚠️`); // 👉🏼 1 ⚠️

instancia2.sumarContador();
console.log(`👉🏼 ${ClasePropiedadesEstaticas.contador} ⚠️`); // 👉🏼 2 ⚠️
