function usandoPromesas() {
  // ejecutamos una promesa y le concatenamos escenarios
  promesaDemorada()
    .then(() => {
      // Si lo logra
    })
    .catch(() => {
      // Si falla
    });
  // Este código se ejecuta sin esperar a que la promesa
  // demorada termine de resolverse
}
