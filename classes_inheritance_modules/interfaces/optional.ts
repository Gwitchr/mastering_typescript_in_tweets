interface IUsuario {
  id: string;
  nombre: string;
  apellidos: string;
  ocupacion?: string;
}

const usuario2: IUsuario = {
  id: "🪪",
  nombre: "Miguel",
  apellidos: "Hidalgo y 🩻",
};

const usuario3: IUsuario = {
  id: "🆔",
  nombre: "Josefa",
  apellidos: "Ortiz de Domínguez",
  ocupacion: "Corregidora",
};
