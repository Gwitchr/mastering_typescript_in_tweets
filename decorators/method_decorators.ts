function decoradorMetodo(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  console.log(`target:${target.constructor} ⚠️`);
  console.log(`method:${target[methodName]} ⚠️`);
  console.log(`descriptor:${JSON.stringify(descriptor)} ⚠️`);
}
class ClaseConDecoradorMetodo {
  @decoradorMetodo
  print(mensaje: string) {
    console.log(`He aquí mi mensaje: ${mensaje} ⚠️`);
  }
}
// target:class ClaseConDecoradorMetodo {
// 	print(mensaje) {
// 		console.log(`He aquí mi mensaje: ${mensaje} ⚠️`);
// 	}
// } ⚠️
// method:print(mensaje) {
// 		console.log(`He aquí mi mensaje: ${mensaje} ⚠️`);
// 	} ⚠️
// descriptor:{"writable":true,"enumerable":false,"configurable":true} ⚠️
