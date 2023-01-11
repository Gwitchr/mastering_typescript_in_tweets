function retornoNada(): void {
  console.log(`ja! 😜 ⚠️`);
}

const ha = retornoNada();

console.log(`${ha} ⚠️`);

function retornoNumero(a: number, b: number): number {
  return a * b + a;
}

const numero = retornoNumero(2, 3);
