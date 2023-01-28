function argumentosVariables(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`argumento #${i} = ${args[i]} ⚠️`);
  }
}

argumentosVariables();
argumentosVariables("🦉", "🦢", "🐓");
// argumento #0 = 🦉 ⚠️
// argumento #1 = 🦢 ⚠️
// argumento #2 = 🐓 ⚠️
argumentosVariables(1, 3, 2);
// argumento #0 = 1 ⚠️
// argumento #1 = 3 ⚠️
// argumento #2 = 2 ⚠️
