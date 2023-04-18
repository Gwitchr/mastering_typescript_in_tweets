function fabricaDeDecorador(parametroAdicional: string) {
  return (constructor: Function) => {
    console.log(`Soy una 🏭 de decoradores 
      y tengo un parámetro adicional: ${parametroAdicional} ⚠️`);
  };
}

@fabricaDeDecorador("🏭")
class ClaseConFabrica {}
