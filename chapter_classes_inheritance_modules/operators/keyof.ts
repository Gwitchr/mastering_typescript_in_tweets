interface IPersona {
  edad: number;
  altura: number;
  nombre: string;
  apellidos: string;
}

type PersonaKeys = keyof IPersona; // "edad" | "altura" | "nombre" | "apellidos"

function accederValor(key: PersonaKeys, obj: IPersona) {
  return obj[key];
}

const val = accederValor("");
