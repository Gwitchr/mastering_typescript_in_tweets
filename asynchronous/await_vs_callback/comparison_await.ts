async function usandoAsync() {
  try {
    // ejecutamos código asíncrono y detenemos la ejecución
    // de código adicional
    await promesaDemorada();
    // Este código no se ejecuta hasta que no haya resolución
  } catch (error) {
    // Ejecutar en caso de que la promesa no
    // resuelva favorable
  }
  // Este código reanuda su ejecución una vez se resuelva la promesa
}
