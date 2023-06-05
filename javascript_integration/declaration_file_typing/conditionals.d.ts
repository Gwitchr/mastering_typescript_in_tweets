declare type NumeroOBooleanoOString<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : never;
