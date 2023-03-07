type InferirTipado<T> = T extends { id: infer U } ? U : never;
// Si el tipado sustituto T es un objeto que contiene una propiedad llamada id,
// Typescript trata de inferir el tipado del valor y lo asigna a un nuevo tipado
// sustituto llamado U y además lo asigna a nuestro tipado inicial
