interface IMamifero {
  id: string;
  pelaje: boolean;
  genus: string;
  especie: string;
  familia: string;
  orden: string;
  emoji: string;
}

const mamiferoObligatorio: IMamifero = {
  id: "1006003",
  pelaje: true,
  genus: "leopardus",
  especie: "tigrinus",
  emoji: "🐆",
  familia: "felidae",
  //orden:'carnivorus '
};

const mamiferoOpcional: Partial<IMamifero> = {
  id: "1006003",
  pelaje: true,
  genus: "leopardus",
  especie: "tigrinus",
  emoji: "🐆",
  familia: "felidae",
  //orden:'carnivorus '>
};
