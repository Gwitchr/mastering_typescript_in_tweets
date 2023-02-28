function usandoGenericos<T>(valor: T) {
  console.log(`valor: ${valor} ⚠️`);
}

usandoGenericos("una ⛓️ de caracteres");
usandoGenericos<string>("una ⛓️ de caracteres");
usandoGenericos<number>("una ⛓️ de caracteres");
