function decoradorAuditor(
  target: any,
  methodName: string,
  _descriptor?: PropertyDescriptor
) {
  const fnOriginal = target[methodName];
  const fnAuditora = function (this: any) {
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
  @decoradorAuditor
  print(msj1: string, msj2: string) {
    console.log(`mensaje 1:${msj1} ⚠️`);

    console.log(`mensaje 2:${msj2} ⚠️`);
  }
}
const demoAudit = new ClaseConAuditor();
demoAudit.print("📞", "🫘");
