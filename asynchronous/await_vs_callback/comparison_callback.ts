function usandoCallbacks() {
  function siLoLogra() {}
  function siFalla() {}
  // ejecutamos una función y proveemos ambas opciones
  ejecucionAsincrona(siLoLogra, siFalla);
  // código que se sigue ejecutando linealmente y no espera
  // a que ejecucionAsincrona se termine de ejecutar
}
