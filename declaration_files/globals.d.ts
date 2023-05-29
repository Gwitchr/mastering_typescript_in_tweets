interface ContieneErroresArg {
  error: Nullable<string>;
}

declare module "libreriaExterna" {
  function contieneErrores(argumento: ContieneErroresArg): boolean;
}
