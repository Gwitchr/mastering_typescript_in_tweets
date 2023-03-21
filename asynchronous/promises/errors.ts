function promesaFallida(): Promise<void> {
  return new Promise<void>((_resolve: () => void, reject: () => void) => {
    console.log(`2 rechazando la promesa  ⚠️`);
    reject();
  });
}
console.log(`1 iniciando... ⚠️`);
promesaFallida()
  .then(() => {})
  .catch(() => console.log(`3 Atrapado 🐛 ⚠️`));

// 1 iniciando... ⚠️
// 2 rechazando la promesa  ⚠️
// 3 Atrapado 🐛 ⚠️
