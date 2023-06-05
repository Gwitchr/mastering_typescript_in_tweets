interface Posible1 {
    id: string;
}
interface Posible2 {
    type: "text" | "image";
}
type Posible = Posible1 | Posible2;
declare function obtenerPrimerElemento<T extends Posible>(arg: T[]): T;
