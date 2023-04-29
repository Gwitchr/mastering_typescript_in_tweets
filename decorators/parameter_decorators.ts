function decoradorParametro(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(`objetivo:${target.constructor} ⚠️`);
  console.log(`nombre del método:${target[methodName]} ⚠️`);
  console.log(`índice del parámetro:${parameterIndex} ⚠️`);
}

class ClaseConDecoradorParametro {
  print(@decoradorParametro impresion: string) {}
}

// objetivo:class ClaseConDecoradorParametro {
// 	print(impresion) { }
// } ⚠️
// nombre del método:print(impresion) { } ⚠️
// índice del parámetro:0 ⚠️
