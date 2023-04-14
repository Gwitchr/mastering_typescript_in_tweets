export function decoradorClase(_constructor: Function) {}
export function decoradorPropiedad(_target: any, _propertyKey: string) {}
export function decoradorMetodo(
  _target: any,
  _methodName: string,
  _descriptor?: PropertyDescriptor
) {}
export function decoradorParametro(
  _target: any,
  _methodName: string,
  _parameterIndex: number
) {}

@decoradorClase
export class ClaseDecoradores {
  @decoradorPropiedad
  id: number = 1;
  @decoradorMetodo
  print() {}
  setId(@decoradorParametro _id: number) {}
}
