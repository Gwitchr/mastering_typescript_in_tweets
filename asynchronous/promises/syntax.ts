function demorarEjecucion(resolve: () => void, reject: () => void) {
  function despuesTimeout() {
    resolve();
  }
  setTimeout(despuesTimeout, 1000);
}

function promesaDemorada(): Promise<void> {
  return new Promise<void>(demorarEjecucion);
}

promesaDemorada().then(() => {
  console.log(` Promesa demorada ⚠️`);
});
