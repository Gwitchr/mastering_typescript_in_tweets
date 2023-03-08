type NumeroOCaracterOFecha<T> = T extends Date
  ? Date
  : T extends number
  ? Date | number
  : T extends string
  ? Date | number | string
  : never;

function dosArgumentosVinculados<T>(a: T, b: NumeroOCaracterOFecha<T>): void {
  return;
}
dosArgumentosVinculados(new Date(), new Date());
dosArgumentosVinculados(new Date(), "nooooo");

dosArgumentosVinculados("síiiii", 0);
