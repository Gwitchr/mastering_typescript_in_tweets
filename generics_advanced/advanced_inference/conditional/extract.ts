type ExtractEjemplo = Extract<string | boolean | never, string | number>;

const cadena: ExtractEjemplo = "⛓️ de caracteres";
const numero: ExtractEjemplo = 101;
