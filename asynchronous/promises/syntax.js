"use strict";
function demorarEjecucion(resolve, reject) {
    function despuesTimeout() {
        resolve();
    }
    setTimeout(despuesTimeout, 1000);
}
function promesaDemorada() {
    return new Promise(demorarEjecucion);
}
promesaDemorada().then(() => {
    console.log(` Promesa demorada ⚠️`);
});
