class ConstructorParams {
  constructor(public name: string, private age: number) {}
}

let miClase = new ConstructorParams("Miguel Hidalgo", 82);

console.log(`${miClase.name} ⚠️`); // Miguel Hidalgo ⚠️
console.log(`${miClase.age} ⚠️`);
