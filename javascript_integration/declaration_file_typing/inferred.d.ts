declare type Inferido<T> = T extends { id: infer U } ? U : never;
