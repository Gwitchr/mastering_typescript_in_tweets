let desconocido: unknown = "un desconocido 🕵🏼";
desconocido = 1;
let conocido = "Conocido";

conocido = desconocido as string;
// sintaxis alternativa
// conocido = <string>desconocido
