function imprimirGenerico<T>(valor: T) {
  console.log(`El tipado de T es ${typeof valor} ⚠️`);
  console.log(`El valor de T es ${valor} ⚠️`);
}

imprimirGenerico("1");
// El tipo de T es string ⚠️
// El valor de T es 1 ⚠️
imprimirGenerico(1);
// El tipo de T es number ⚠️
// El valor de T es 1 ⚠️
imprimirGenerico(true);
// El tipo de T es boolean ⚠️
// El valor de T es true ⚠️
imprimirGenerico({ marca: "genérica" });
// El tipo de T es object ⚠️
// El valor de T es [object Object] ⚠️
imprimirGenerico(() => {});
// El tipo de T es function ⚠️
// El valor de T es function () { } ⚠️
