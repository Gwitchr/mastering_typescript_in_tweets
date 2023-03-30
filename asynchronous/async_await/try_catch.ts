import { promesaFallida } from "./delayed";

async function llamarPromesaFallida() {
  try {
    console.log(`Llamando 📞... ⚠️`);
    await promesaFallida();
  } catch (error) {
    console.log(`Todo me sale mal 🤡 ${error?.toString()} ⚠️`);
  }
}

llamarPromesaFallida();

// Llamando 📞... ⚠️
// Promesa fallida después de 1000ms 😭 ⚠️
// Todo me sale mal 🤡 muy mal ⚠️
