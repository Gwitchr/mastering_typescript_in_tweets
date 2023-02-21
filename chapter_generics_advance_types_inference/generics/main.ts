function imprimirGenerico<T>(valor: T) {
  console.log(`El tipado de T es ${typeof valor} ⚠️`);
  console.log(`El valor de T es ${valor} ⚠️`);
}

imprimirGenerico("1");
imprimirGenerico(1);
imprimirGenerico(true);
imprimirGenerico({ marca: "genérica" });
imprimirGenerico(() => {});
