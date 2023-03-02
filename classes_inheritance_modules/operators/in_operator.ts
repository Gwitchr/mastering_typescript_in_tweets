interface IPersona {
  edad: number;
  nombre: string;
  estatura: number;
}

interface IPerro {
  raza: string;
  edad: number;
  nombre: string;
  estatura: number;
}

function saludarPersonaPerro(sujeto: IPersona | IPerro): string {
  if ("raza" in sujeto) {
    return `👋 saludos peludos ${sujeto.nombre}`;
  }
  return `Buenas tardes ${sujeto.nombre}`;
}
