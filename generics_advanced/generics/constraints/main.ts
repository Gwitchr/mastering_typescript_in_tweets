function accesador<T, K extends keyof T>(obj: T, llave: K) {
  console.log(
    `La llave accesada:${llave.toString()} y su valor ${obj[llave]} ⚠️`
  );
}

const usuario = {
  id: "identificador 🪪",
  nombre: "Jaciel",
};

accesador(usuario, "nombre"); // La llave accesada:nombre y su valor Jaciel ⚠️

accesador(usuario, "apellido");
