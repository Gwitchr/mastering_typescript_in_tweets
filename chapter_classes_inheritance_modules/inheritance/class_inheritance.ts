interface IArticulo {
  identificador: string;
}

interface IElectronico extends IArticulo {
  voltaje: number;
}

class ClaseBase implements IArticulo {
  identificador: "‼️";
}

class ClaseExtendida extends ClaseBase implements IElectronico {
  identificador: "‼️";
  voltaje: 240;
}
