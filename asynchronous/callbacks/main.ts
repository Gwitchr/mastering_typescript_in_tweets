function diferirEjecucion(callback: () => void) {
  function ejecutarDemoraa() {
    callback();
    console.log(`timeout ⚠️`);
  }
  console.log(`Ejecutando Timeout ⚠️`);

  setTimeout(ejecutarDemoraa, 1000);

  console.log(`Ejecutao ⚠️`);
}

diferirEjecucion(() => console.log(`Ayayayay ⚠️`));

// 1.- Ejecutando Timeout ⚠️
// 2.- Ejecutao ⚠️
// 3.- Ayayayay ⚠️
// 4.- timeout ⚠️
