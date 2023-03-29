import { promesaTardia } from "./delayed";

async function usarPromesaTardia(): Promise<void> {
  console.log(`Antes de la ejecución ⚠️`);
  await promesaTardia();
  console.log(`Después de la ejecución ⚠️`);
}

usarPromesaTardia();

// Antes de la ejecución ⚠️
// Promesa resuelta después de 1000ms 😎 ⚠️
// Después de la ejecución ⚠️
