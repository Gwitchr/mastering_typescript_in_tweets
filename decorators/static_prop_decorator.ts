function decoradorPropEstatica(target: any, property: string) {
  if (typeof target === "function") {
    console.log(`nombre de la clase: ${target.name} ⚠️`);
  } else {
    console.log(`nombre de la clase: ${target.property.name} ⚠️`);
  }
  console.log(`Nombre de la Propiedad: ${property} ⚠️`);
}

class ClasePropiedadEstatica {
  @decoradorPropEstatica
  static propiedad: string;
}
// nombre de la clase: ClasePropiedadEstatica ⚠️
// Nombre de la Propiedad: propiedad ⚠️
