function añadirValores(x: number, y?: number): number {
  return x + (y ?? 0);
}

function concatenarValores(x?: number, y: string): string {
  return `${y} ${x ?? "no disponible 🙅🏻‍♂️"}`;
}
