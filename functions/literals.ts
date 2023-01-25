type CadenasCPermitidas = "quizá" | "no sé" | "a lo mejor";
type NumerosPermitidos = 1000 | 10 | 100;

function conLiteral(val: CadenasCPermitidas | NumerosPermitidos) {
  console.log(`invocada con valor ${val} ⚠️`);
}

conLiteral("quizá");
conLiteral("no sé");
conLiteral(1000);
conLiteral("1000");
