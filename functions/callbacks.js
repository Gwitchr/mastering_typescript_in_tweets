function callback(msg) {
    console.log("\nCallback soy, \ndentro de otra funci\u00F3n estoy, \nmi mensaje es: \n".concat(msg, "\n \u26A0\uFE0F"));
}
function metodoConCallback(msg, cb) {
    console.log("Funci\u00F3n principal dice: ".concat(msg, " \u26A0\uFE0F"));
    cb(msg);
}
metodoConCallback("🧧", callback);
