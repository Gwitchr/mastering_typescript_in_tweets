function todosFalsy(val: number | null | undefined | "" | 0 | -0): number {
  return val || 0;
}

function nullOUndefiend(val: number | null | undefined): number {
  return val ?? 0;
}
