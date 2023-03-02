function accesador(obj, llave) {
    console.log("La llave accesada:".concat(llave.toString(), " y su valor ").concat(obj[llave], " \u26A0\uFE0F"));
}
var usuario = {
    id: "identificador 🪪",
    nombre: "Jaciel"
};
accesador(usuario, "nombre");
