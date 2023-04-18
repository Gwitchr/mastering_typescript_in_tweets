"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoradorAuditor(target, methodName, _descriptor) {
    const fnOriginal = target[methodName];
    const fnAuditora = function () {
        console.log(`Auditando: ${methodName} ⚠️`);
        for (let arg in arguments) {
            console.log(`Arg: ${arg} ⚠️`);
        }
        fnOriginal.apply(this, arguments);
    };
    target[methodName] = fnAuditora;
    return target;
}
class ClaseConAuditor {
    print(msj1, msj2) {
        console.log(`mensaje 1:${msj1} ⚠️`);
        console.log(`mensaje 2:${msj2} ⚠️`);
    }
}
__decorate([
    decoradorAuditor
], ClaseConAuditor.prototype, "print", null);
const demoAudit = new ClaseConAuditor();
demoAudit.print("📞", "🫘");
