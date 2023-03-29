export function promesaTardia(): Promise<void> {
  return new Promise((resolve: () => void, _reject: () => void) => {
    setTimeout(() => {
      console.log(`Promesa resuelta después de 1000ms 😎 ⚠️`);
      resolve();
    }, 1000);
  });
}

export function promesaFallida(): Promise<void> {
  return new Promise((_resolve: () => void, reject: () => void) => {
    setTimeout(() => {
      console.log(`Promesa fallida después de 1000ms 😭 ⚠️`);
      reject();
    }, 1000);
  });
}
