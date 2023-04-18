function decoradorClase(constructor: Function) {
  constructor.prototype.propiedadNueva = true;
}

@decoradorClase
class ClaseDecorador {}

const demo = new ClaseDecorador();
console.log(`demo.propiedadNueva: 
	${(demo as any).propiedadNueva} ⚠️`);

// demo.propiedadNueva:
// true ⚠️
