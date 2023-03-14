function diferirEjecucion(callback) {
    function ejecutarDemoraa() {
        callback();
        console.log("timeout \u26A0\uFE0F");
    }
    console.log("Ejecutando Timeout \u26A0\uFE0F");
    setTimeout(ejecutarDemoraa, 1000);
    console.log("Ejecutao \u26A0\uFE0F");
}
diferirEjecucion(function () { return console.log("Ayayayay \u26A0\uFE0F"); });
