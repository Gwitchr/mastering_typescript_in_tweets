function promesaConValores(): Promise<string[]> {
  return new Promise(
    (resolve: (val: string[]) => void, _reject: (error: string) => void) => {
      resolve(["1", "2", "3", "Maaaaaambo"]);
    }
  );
}

async function obetnerValoresDePromesa() {
  const cuenta = await promesaConValores();
  for (let n in cuenta) {
    console.log(`${cuenta[n]} ⚠️`);
  }
}
obetnerValoresDePromesa();
