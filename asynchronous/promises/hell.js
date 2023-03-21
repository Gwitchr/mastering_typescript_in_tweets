"use strict";
function readFile(fileName, callback) {
    // leer un archivo con el sistema de lectura del sistema
}
function handleError(e) { }
function infiernoCallbacks() {
    readFile("archivo1.txt", (err, data) => {
        if (data) {
            readFile("archivo2.txt", (err, data) => {
                if (data) {
                    readFile("archivo3.txt", () => {
                        if (data) {
                            console.log(`Éxito! ⚠️`);
                        }
                        else {
                            handleError(err);
                        }
                    });
                }
                else {
                    handleError(err);
                }
            });
        }
        else {
            handleError(err);
        }
    });
}
