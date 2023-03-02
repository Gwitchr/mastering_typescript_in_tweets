interface INoTengoAlas {
  grunir(): void;
  pelaje: string;
}

interface INoTengoPelaje {
  grunir(): void;
  alas: string;
}

function usarGenerico<T extends INoTengoAlas | INoTengoPelaje>(animal: T) {
  animal.grunir(); // <- No hay problema, es común en tipados posibles
  console.log(`Tengo alas de tipo ${animal.alas} ⚠️`);

  console.log(`Tengo pelaje de tipo ${animal.pelaje} ⚠️`);
}
