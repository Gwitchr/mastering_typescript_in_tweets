interface IPropsFijas {
  readonly name: string;
  apellido: string;
}

const persona: IPropsFijas = {
  name: "Emiliano",
  apellido: "Zapata",
};

persona.apellido = "Villa";

persona.name = "Pancho";
