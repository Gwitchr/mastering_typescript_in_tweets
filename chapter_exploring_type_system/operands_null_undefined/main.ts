function sumaImposible(x: number, y: number | null | undefined) {
  return x + y;
}

function sumaImposibleSegura(x: number, y: number | null | undefined): number {
  return x + (y ?? 0);
}
