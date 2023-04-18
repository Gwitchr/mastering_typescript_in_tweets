function fabricaDeDecorador(parametroAdicional: string) {
  return () => {
    console.log(`Soy una 🏭 de decoradores 
      y tengo un parámetro adicional: ${parametroAdicional} ⚠️`);
  };
}
