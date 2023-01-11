type acolcheUnion = string | number;

function acolcharConAlias(acolche: acolcheUnion, num: number): string {
  if (typeof acolche === "number") {
    return `${" ".repeat(acolche)}${num}`;
  }
  return `${acolche}${num}`;
}

console.log(`${acolcharConAlias("🪶 ", 3)} caracteres ⚠️`);
console.log(`${acolcharConAlias(4, 3)} número ⚠️`);
