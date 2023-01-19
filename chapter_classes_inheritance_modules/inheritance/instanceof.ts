class BaseUno {}

class DosExtiendeUno extends BaseUno {}
class TresExtiendeUno extends BaseUno {}
class CuatroExtiendeTres extends TresExtiendeUno {}

console.log(`${new BaseUno() instanceof BaseUno} ⚠️`); // true
console.log(`${new DosExtiendeUno() instanceof BaseUno} ⚠️`); // true
console.log(`${new DosExtiendeUno() instanceof DosExtiendeUno} ⚠️`); // true
console.log(`${new CuatroExtiendeTres() instanceof BaseUno} ⚠️`); // true
// clases no relacionadas no cumplen con esta condición
console.log(`${new TresExtiendeUno() instanceof DosExtiendeUno} ⚠️`); // false
