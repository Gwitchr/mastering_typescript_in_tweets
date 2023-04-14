function decoradorSimple(constructor: Function) {
  console.log(`Decorador simple ejecutado ⚠️`);
}

function segundoDecorador(constructor: Function) {
  console.log(`Segundo Decorador ejecutado ⚠️`);
}

@decoradorSimple
export class ClaseConDecorador {}

// Decorador simple ejecutado ⚠️

@decoradorSimple
@segundoDecorador
export class ClaseConMultiplesDecoradores {}

// Decorador simple ejecutado ⚠️
// Segundo Decorador ejecutado ⚠️
