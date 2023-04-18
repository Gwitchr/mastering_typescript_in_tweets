function decoradorPropiedad(target: any, propertyName: string) {
  console.log(`target.constructor:${target.constructor} ⚠️`);
  console.log(`método:${propertyName} ⚠️`);
}

class ClassDecoradorPropiedad {
  @decoradorPropiedad
  propiedadClase: string | undefined;
}

const classProp = new ClassDecoradorPropiedad();
// target.constructor:class ClassDecoradorPropiedad {} ⚠️
// método:propiedadClase ⚠️
