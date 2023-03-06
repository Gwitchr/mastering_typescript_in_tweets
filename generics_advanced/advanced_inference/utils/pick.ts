interface IMamifero {
  id: string;
  pelaje: boolean;
  genus: string;
  especie: string;
  familia: string;
  orden: string;
  emoji: string;
}

type MamiferoLightProps = Pick<IMamifero, "especie" | "familia" | "emoji">;

const mamiferoLigth: MamiferoLightProps = {
  especie: "tigrinus",
  emoji: "🐆",
  familia: "felidae",
};
