var variableGlobal!: string;

function definirVarGlobal(val: string) {
  variableGlobal = val;
}

definirVarGlobal("soy global 🌎");

console.log(`la variableGlobal es ${variableGlobal!} ⚠️`);
