"use strict";
function acolcharConAlias(acolche, num) {
    if (typeof acolche === "number") {
        return `${" ".repeat(acolche)}${num}`;
    }
    return `${acolche}${num}`;
}
console.log(`${acolcharConAlias("🪶 ", 3)} caracteres ⚠️`);
console.log(`${acolcharConAlias(4, 3)} número ⚠️`);
