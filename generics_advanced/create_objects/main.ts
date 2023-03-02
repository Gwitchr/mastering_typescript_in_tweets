class ClaseA {}

function instanciadora<T>(arg: { new (): T }): T {
  return new arg();
}
